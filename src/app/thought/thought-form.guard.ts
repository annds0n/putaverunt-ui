import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../core/authentication.service';
import { Perfil } from '../core/models/perfil';

@Injectable()
export class ThoughtFormGuard implements CanActivate {

    constructor(
        private readonly _router: Router,
        private readonly auth: AuthenticationService
        ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.auth.getUser()
            .pipe(map(user => {
                if (user.perfil === Perfil.ADMIN) {
                    return true;
                }
                this._router.navigate(['/not-found']);
                return false;
            }));
    }
}
