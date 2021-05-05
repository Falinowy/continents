import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountriesService } from '../../service/countries.service';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/module/country';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit, OnDestroy {
  private counteriesSubscription: Subscription;
  regions: Country;
  nameRegion: string;
  constructor(private route: ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion(): void {
    this.nameRegion = this.route.snapshot.params['nameRegion'];
    this.counteriesSubscription = this.countriesService.getRegion(this.nameRegion)
      .subscribe(result => {
        this.regions = result;
      });
  }
  ngOnDestroy() {
    this.counteriesSubscription.unsubscribe();
}
}
