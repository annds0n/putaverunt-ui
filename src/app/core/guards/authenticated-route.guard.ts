import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, map } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthenticatedRouteGuard implements CanActivate {
    constructor(private readonly authService: AuthenticationService,
        private readonly _router: Router) { }
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated()
        .pipe(catchError(err => {
            this._router.navigate(['/login']);
            return err;
        }))
        .pipe(map(isAuthenticated => {

            if (!isAuthenticated) {
                this._router.navigate(['/login']);
                return false;
            }

             return true;
        }));
    }
}
