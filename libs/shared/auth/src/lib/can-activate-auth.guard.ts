import { CanActivateFn } from '@angular/router';

export const canActivateAuthGuard: CanActivateFn = (route, state) => {
  return true;
};
