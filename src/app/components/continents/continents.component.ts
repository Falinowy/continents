import { Component, OnInit } from '@angular/core';
import { Continents } from '../../module/continents';
import { CountriesService } from '../../service/countries.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsComponent implements OnInit {
  continents: Continents[] = [];

  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getContinents();
  }
  getContinents(): void {
    this.countriesService.getContinents()
      .subscribe(continents => this.continents = continents);
  }

}
