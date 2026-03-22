import { Component, inject } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { FormDialogData } from '../shared/form-dialog/form-dialog.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { TitleService } from '../../service/title.service';
import { AddCardComponent } from '../shared/add-card/add-card.component';
import { DiscoveryCardComponent } from '../shared/discovery-card/discovery-card.component';
import { SkeletonCardComponent } from '../shared/skeleton-card/skeleton-card.component';
import { ModalService } from '../../service/modal.service';
import { CardVariant, DiscoveryVariant } from '../../shared/enums/card-variant';

import { FormKey } from '../../shared/enums/form-key';
import { AppRoute } from '../../shared/enums/app-route';

type AddContinentResult = Record<FormKey.Name | FormKey.Region, string>;

@Component({
  selector: 'app-continents',
  standalone: true,
  imports: [MatButtonModule, AddCardComponent, DiscoveryCardComponent, SkeletonCardComponent],
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss']
})
export class ContinentsComponent {
  private readonly countriesService = inject(CountriesService);
  private readonly modalService = inject(ModalService);
  private readonly titleService = inject(TitleService);
  
  public readonly CardVariant = CardVariant;
  public readonly DiscoveryVariant = DiscoveryVariant;
  public readonly AppRoute = AppRoute;

  private readonly ADD_CONTINENT_CONFIG: FormDialogData<AddContinentResult> = {
    title: 'Add New Continent',
    submitLabel: 'Add Continent',
    fields: [
      { key: FormKey.Name, label: 'Continent Name', required: true },
      { key: FormKey.Region, label: 'Region Code', required: true }
    ]
  };

  constructor() {
    this.titleService.setTitle('Continents');
  }

  public errorMessage = '';
  
  public continents = toSignal(
    this.countriesService.getContinents()
  );

  openNewContinentsModal(): void {
    this.modalService.openForm(this.ADD_CONTINENT_CONFIG).subscribe(result => {
      if (result) {
        this.countriesService.addContinent({
          id: null,
          name: result[FormKey.Name],
          region: result[FormKey.Region]
        }).subscribe({
          error: err => this.errorMessage = err instanceof Error ? err.message : String(err)
        });
      }
    });
  }
}
