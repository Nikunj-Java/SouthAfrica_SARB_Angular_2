import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const authService= inject(AuthService);
  const router=inject(Router);
 

  const expectedRole= route.data?.['expectedRole']; 
  const userRole=authService.getRole();

  if(authService.isLoggedin() && userRole== expectedRole){
    return true;
  }
  else{
    return router.createUrlTree(['/not-authorized']);
  }
};
