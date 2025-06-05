import { CanActivateFn } from '@angular/router';
export const roleGuard: CanActivateFn = () => localStorage.getItem('role') === 'admin';
