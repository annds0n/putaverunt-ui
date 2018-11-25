import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../authentication.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
        private readonly route: ActivatedRoute) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

       return this.authService.isAuthenticated().pipe(map(isAuthenticated => {
            return !isAuthenticated;
       }) );
    }
}
