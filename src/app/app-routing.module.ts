import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component'
import { ContinentsComponent } from './components/continents/continents.component'
import { CountriesDetailComponent } from './components/countries-detail/countries-detail.component'

const routes: Routes = [
  { path: '', redirectTo: 'continents', pathMatch: 'full' },
  { path: 'continents', component: ContinentsComponent },
  { path: 'continent/:nameRegion', component: CountriesComponent },
  { path: 'country/:nameCountry', component: CountriesDetailComponent },
  { path: '**', redirectTo: '/continents' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
