import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { ModalService } from '../../service/modal.service';
import { map } from 'rxjs/operators';
import { MessageType } from '../enums/message-type';
import { AppRoute } from '../enums/app-route';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const modalService = inject(ModalService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return modalService.showMessage({
    title: 'Access Restricted',
    message: 'Please log in to view country details (admin/admin)',
    type: MessageType.Warning,
    icon: 'lock_person'
  }).pipe(
    map(() => router.createUrlTree([AppRoute.Login]))
  );
};
