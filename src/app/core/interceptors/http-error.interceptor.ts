import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(
        private readonly _router: Router,
        private readonly _route: ActivatedRoute
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(err => {
            if (err instanceof HttpErrorResponse && (err.status === 401 || err.status === 403) && !req.url.includes('login')) {
                this._router.navigate(['login'], {relativeTo: this._route});
            }
            return throwError(err);
        }));
    }
}
