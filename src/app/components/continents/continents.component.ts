import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Continents } from '../../module/continents';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit, OnDestroy  {
  continents: Continents[] = [];
  private counteriesSubscription: Subscription;

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getContinents();
  }
  getContinents(): void {
    this.counteriesSubscription = this.countriesService.getContinents()
      .subscribe(continents => this.continents = continents);
  }
  ngOnDestroy() {
    this.counteriesSubscription.unsubscribe();
}
}
