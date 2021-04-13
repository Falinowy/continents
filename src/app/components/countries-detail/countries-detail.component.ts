import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/service/countries.service';
import { Country } from 'src/app/module/country';

@Component({
  selector: 'app-countries-detail',
  templateUrl: './countries-detail.component.html',
  styleUrls: ['./countries-detail.component.css']
})
export class CountriesDetailComponent implements OnInit {
  countries: Country;
  nameCountry: string;

  constructor(
    private route: ActivatedRoute,
    private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getCounterDetail();
  }

  getCounterDetail(): void {
    this.nameCountry = this.route.snapshot.params['nameCountry'];
    this.countriesService.getCounterDetail(this.nameCountry)
      .subscribe(result => {
        this.countries = result
      });

  }
}
