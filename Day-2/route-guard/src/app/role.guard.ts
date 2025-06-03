// role.guard.ts
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data?.['expectedRole']; // from route config
  const userRole = authService.getRole();

  if (authService.isLoggedin() && userRole === expectedRole) {
    return true;
  } else {
    return router.createUrlTree(['/not-authorized']);
  }
};
