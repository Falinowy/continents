import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { Country } from '../../module/country';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { TitleService } from '../../service/title.service';
import { FormDialogData } from '../shared/form-dialog/form-dialog.component';
import { BehaviorSubject, combineLatest, filter, map, distinctUntilChanged, switchMap, tap, shareReplay, startWith, debounceTime } from 'rxjs';
import { AddCardComponent } from '../shared/add-card/add-card.component';
import { DiscoveryCardComponent } from '../shared/discovery-card/discovery-card.component';
import { SkeletonCardComponent } from '../shared/skeleton-card/skeleton-card.component';
import { ModalService } from '../../service/modal.service';
import { CardVariant, DiscoveryVariant } from '../../shared/enums/card-variant';
import { RouteParam } from '../../shared/enums/route-params';
import { FormKey } from '../../shared/enums/form-key';
import { AppRoute } from '../../shared/enums/app-route';

type AddCountryResult = Record<FormKey.Name | FormKey.FlagUrl, string>;

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    AddCardComponent,
    DiscoveryCardComponent,
    SkeletonCardComponent
  ],
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly countriesService = inject(CountriesService);
  private readonly titleService = inject(TitleService);
  private readonly modalService = inject(ModalService);

  public readonly DiscoveryVariant = DiscoveryVariant;
  public readonly CardVariant = CardVariant;
  public readonly AppRoute = AppRoute;

  private readonly region$ = this.route.paramMap.pipe(
    map(params => params.get(RouteParam.NameRegion)),
    filter((v): v is string => typeof v === 'string' && v.length > 0),
    distinctUntilChanged(),
    tap(region => this.titleService.setTitle(region.toUpperCase())),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  public readonly nameRegion = toSignal(
    this.region$,
    { requireSync: false }
  );

  private refresh$ = new BehaviorSubject<void>(undefined);

  public readonly searchControl = new FormControl<string>('', { nonNullable: true });

  private readonly search$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    map((value: string) => value.toLowerCase().trim()),
    distinctUntilChanged()
  );

  private readonly ADD_COUNTRY_CONFIG: FormDialogData<AddCountryResult> = {
    title: 'Add New Country',
    submitLabel: 'Add Country',
    fields: [
      { key: FormKey.Name, label: 'Country Name', required: true },
      { key: FormKey.FlagUrl, label: 'Flag Image URL', required: true }
    ]
  };

  private readonly countriesData$ = combineLatest([
    this.region$,
    this.refresh$,
  ]).pipe(
    switchMap(([region]) => this.countriesService.getRegion(region)),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  public regions = toSignal(
    combineLatest([
      this.countriesData$,
      this.search$,
    ]).pipe(
      map(([countries, term]) =>
        term
          ? countries.filter(c => c.name.common?.toLowerCase().includes(term))
          : countries
      )
    ),
    { requireSync: false }
  );

  openAddCountryModal(): void {
    this.modalService.openForm(this.ADD_COUNTRY_CONFIG).subscribe(result => {
      if (result) {
        const newCountry = this.mapToCountry(result);
        const region = this.nameRegion();
        if (!region) return;
        this.countriesService.addCountryToRegion(region, newCountry);
        this.refresh$.next();
      }
    });
  }

  private mapToCountry(result: AddCountryResult): Partial<Country> {
    const region = this.nameRegion() ?? 'unknown';
    return {
      name: { common: result[FormKey.Name] },
      flags: { png: result[FormKey.FlagUrl] },
      capital: ['Unknown'],
      population: 0,
      area: 0,
      region,
      subregion: 'Custom'
    };
  }
}
