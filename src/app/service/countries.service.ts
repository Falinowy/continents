import { Injectable } from '@angular/core';
import { Continents } from '../module/continents';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../module/country';
import { CONTINENTS } from '../module/mock-continents';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private regionUrl = 'https://restcountries.com/v3.1/region';
  private countryUrl = 'https://restcountries.com/v3.1/name';
  private continentsUrl = 'api/continents';
  private continents: Continents[];
  private country: Country;
  constructor(private http: HttpClient) { }

  getContinents(): Observable<Continents[]> {
    return of(CONTINENTS);
  }

  getRegion(nameRegion: string): Observable<Country> {
    console.log('1');
    return this.http.get<Country>(`${this.regionUrl}/${nameRegion}`);
  }
  getCounterDetail(nameCountry: string): Observable<Country> {
    return this.http.get<Country>(`${this.countryUrl}/${nameCountry}`);
  }

  createProduct(continents: Continents): Observable<Continents> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const newContinents = { ...continents, id: null };
    return this.http.post<Continents>(this.continentsUrl, newContinents, { headers })
    //TODO
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        tap(data => {
          this.continents.push(data);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
