import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CountriesService } from '../../service/countries.service';
import { map, take } from 'rxjs/operators';
import { RouteParam } from '../enums/route-params';
import { AppRoute } from '../enums/app-route';

export const regionGuard: CanActivateFn = (route, state) => {
  const countriesService = inject(CountriesService);
  const router = inject(Router);
  const region = route.params[RouteParam.NameRegion];

  return countriesService.getContinents().pipe(
    take(1),
    map(continents => {
      const exists = continents.some(c => c.region.toLowerCase() === region?.toLowerCase());
      if (exists) {
        return true;
      }
      
      // If region doesn't exist, redirect to continents list
      return router.createUrlTree([AppRoute.Continents]);
    })
  );
};
