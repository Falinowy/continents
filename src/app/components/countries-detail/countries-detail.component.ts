import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/service/countries.service';
import { Country } from 'src/app/module/country';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.scss']
})
export class CountriesDetailComponent implements OnInit, OnDestroy {
  countries: Country;
  nameCountry: string;
  private counteriesDetailSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getCounterDetail();
  }

  getCounterDetail(): void {
    this.nameCountry = this.route.snapshot.params['nameCountry'];
    this.counteriesDetailSubscription = this.countriesService.getCounterDetail(this.nameCountry)
      .subscribe(result => {
        this.countries = result
      });

  }

  ngOnDestroy() {
    this.counteriesDetailSubscription.unsubscribe();
  }

}
