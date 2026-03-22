import { Injectable } from '@angular/core';
import { Continents } from '../module/continents';
import { Observable, of, throwError, BehaviorSubject } from 'rxjs';
import { catchError, tap, map, delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Country } from '../module/country';
import { CONTINENTS } from '../module/mock-continents';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private readonly regionUrl = 'https://restcountries.com/v3.1/region';
  private readonly countryUrl = 'https://restcountries.com/v3.1/name';
  
  private continentsSubject = new BehaviorSubject<Continents[]>(CONTINENTS);
  public continents$ = this.continentsSubject.asObservable();

  private customCountries: Record<string, Country[]> = {};

  constructor(private http: HttpClient) { }

  getContinents(): Observable<Continents[]> {
    return this.continents$.pipe(delay(400));
  }

  getRegion(nameRegion: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.regionUrl}/${nameRegion}`).pipe(
      delay(400),
      map(apiCountries => {
        const local = this.customCountries[nameRegion] || [];
        return [...apiCountries, ...local];
      }),
      catchError(() => {
        return of(this.customCountries[nameRegion] || []).pipe(delay(400));
      })
    );
  }

  addCountryToRegion(regionName: string, country: Partial<Country>): void {
    if (!this.customCountries[regionName]) {
      this.customCountries[regionName] = [];
    }
    this.customCountries[regionName].push(country as Country);
  }
  
  getCountryDetail(nameCountry: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.countryUrl}/${nameCountry}`).pipe(
      delay(800),
      catchError(() => {
        const needle = nameCountry?.toLowerCase();
        for (const region of Object.keys(this.customCountries)) {
          const found = this.customCountries[region].find(c => c.name.common?.toLowerCase() === needle);
          if (found) {
            return of([found]).pipe(delay(400));
          }
        }
        return throwError(() => new Error('Country not found'));
      })
    );
  }

  addContinent(continent: Continents): Observable<Continents> {
    const newContinent: Continents = { ...continent, id: this.continentsSubject.value.length + 1 };
    
    return of(newContinent).pipe(
      tap(data => {
        const current = this.continentsSubject.value;
        this.continentsSubject.next([...current, data]);
      })
    );
  }
}
