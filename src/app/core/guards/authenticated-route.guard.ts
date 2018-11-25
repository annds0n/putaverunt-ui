import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';

@Injectable()
export class AuthenticatedRouteGuard implements CanActivate {
    constructor(private readonly authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated()
        .pipe(map(isAuthenticated => {
             return isAuthenticated;
        }));
    }
}
