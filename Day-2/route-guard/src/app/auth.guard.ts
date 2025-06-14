import { inject } from '@angular/core';
import { CanActivateFn,CanActivateChildFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authService= inject(AuthService);
  const router=inject(Router)
  
  if(authService.isLoggedin()){
    return true;
  }
  else if(authService.isLoggedOut()){
    return false;
  }
   
  else{
    return router.createUrlTree(['/login']);
  }
  
};

export const authChildGuard: CanActivateChildFn =()=>{
  const auth= inject(AuthService);
  const router=inject(Router);
  return auth.isLoggedin() || router.createUrlTree(['/login']);

}