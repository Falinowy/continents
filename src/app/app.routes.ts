import { Routes } from '@angular/router';
import { RouteParam } from './shared/enums/route-params';
import { regionGuard } from './shared/guards/region.guard';
import { authGuard } from './shared/guards/auth.guard';

import { AppRoute } from './shared/enums/app-route';

export const routes: Routes = [
  { path: '', redirectTo: AppRoute.Continents, pathMatch: 'full' },
  { 
    path: AppRoute.Continents, 
    loadComponent: () => import('./components/continents/continents.component').then(m => m.ContinentsComponent) 
  },
  { 
    path: `${AppRoute.Continent}/:${RouteParam.NameRegion}`, 
    loadComponent: () => import('./components/countries/countries.component').then(m => m.CountriesComponent),
    canActivate: [regionGuard]
  },
  { 
    path: `${AppRoute.Country}/:${RouteParam.NameCountry}`, 
    loadComponent: () => import('./components/countries-detail/countries-detail.component').then(m => m.CountriesDetailComponent),
    canActivate: [authGuard]
  },
  { 
    path: AppRoute.Login, 
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent) 
  },
  { path: '**', redirectTo: `/${AppRoute.Continents}` }
];
