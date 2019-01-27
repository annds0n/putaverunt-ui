import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user';

@Injectable()
export class UserResolver implements Resolve<User> {

constructor(private readonly authService: AuthenticationService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<User> {

        return this.authService.getUser();
    }
}

