import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Country } from '../../module/country';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TitleService } from '../../service/title.service';
import { RouteParam } from '../../shared/enums/route-params';
import { SkeletonCardComponent } from '../shared/skeleton-card/skeleton-card.component';
import { DiscoveryVariant } from '../../shared/enums/card-variant';
import { distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-countries-detail',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, SkeletonCardComponent],
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.scss']
})
export class CountriesDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly countriesService = inject(CountriesService);
  private readonly titleService = inject(TitleService);
  
  public readonly DiscoveryVariant = DiscoveryVariant;
  public readonly nameCountry = toSignal(
    this.route.paramMap.pipe(
      map(params => params.get(RouteParam.NameCountry)),
      filter((v): v is string => typeof v === 'string' && v.length > 0),
      distinctUntilChanged(),
      tap(country => this.titleService.setTitle(country.toUpperCase())),
    ),
    { requireSync: false }
  );
  
  public countries = toSignal<Country[]>(
    this.route.paramMap.pipe(
      map(params => params.get(RouteParam.NameCountry)),
      filter((v): v is string => typeof v === 'string' && v.length > 0),
      distinctUntilChanged(),
      switchMap(name => this.countriesService.getCountryDetail(name))
    ),
    { requireSync: false }
  );
}
