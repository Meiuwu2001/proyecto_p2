import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './service/auth.service';

export class authGuard implements CanActivate {

  constructor(private authService: AuthService,
    private router: Router
  ) { }
canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  let response = true;
  console.log(this.authService.isAuthenticatedUser());
  if (!this.authService.isAuthenticatedUser()) {
    this.router.navigate(['/login']);
    response = false;
  }
  return response;
}
};
