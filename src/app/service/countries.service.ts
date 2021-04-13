import { Injectable } from '@angular/core';
import { Continents } from '../module/continents';
import { CONTINENTS } from '../module/mock-continents';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../module/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  regionUrl = 'https://restcountries.eu/rest/v2/region';
  countryUrl = 'https://restcountries.eu/rest/v2/name';
  constructor(private http: HttpClient) { }

  getContinents(): Observable<Continents[]> {
    return of(CONTINENTS);
  }

  getRegion(nameRegion: string): Observable<Country> {
    return this.http.get<Country>(`${this.regionUrl}/${nameRegion}`); 
  }
  getCounterDetail(nameCountry: String): Observable<Country> {
    return this.http.get<Country>(`${this.countryUrl}/${nameCountry}`); 
  }

}
