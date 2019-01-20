import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';

import { Thought, ThoughtService } from './shared';

@Injectable()
export class ThoughtResolver implements Resolve<Thought> {

    constructor(
        private readonly _router: Router,
        private readonly _service: ThoughtService
        ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Thought> {

        const thoughtId = +route.params[Thought.ID];

        if (isNaN(thoughtId)) {
            this._router.navigate(['/thoughts']);
            return throwError('Parâmetro de rota incorreto');
        }

        return this._service.get(thoughtId);
    }
}
