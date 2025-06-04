import { CanActivateFn } from '@angular/router';


const isAdmin= ()=>{
  return false;
  //return false
}

export const resolveGuard: CanActivateFn = (route, state) => {
  const allowed =isAdmin();
  console.log('Admin route access:',allowed);
  return allowed;
};
