import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Continents } from '../../module/continents';
import { CountriesService } from '../../service/countries.service';
import { NewContinentsComponent } from './new-continents/new-continents/new-continents.component';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.scss']
})
export class ContinentsComponent implements OnInit, OnDestroy  {
  continents: Continents[] = [];
  errorMessage: string;
  private counteriesSubscription: Subscription;

  constructor(private countriesService: CountriesService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getContinents();
  }
  getContinents(): void {
    this.counteriesSubscription = this.countriesService.getContinents()
      .subscribe({
        next: (continents: Continents[]) => this.continents = continents,
        error: err => this.errorMessage = err
      });
  }

  ngOnDestroy() {
    this.counteriesSubscription.unsubscribe();
}
openNewContinentsModal() {
  this.dialog.open(NewContinentsComponent);
}
}
