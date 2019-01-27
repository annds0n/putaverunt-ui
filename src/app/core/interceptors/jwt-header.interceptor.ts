import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication.service';
import { RequestHeaders } from '../models';

@Injectable({providedIn: 'root'})
export class JWTHeaderInterceptor implements HttpInterceptor {

    constructor(private readonly auth: AuthenticationService) { }

    // TODO: Adicionar strings para constantes
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.includes('login') && req.method === 'POST') {
            return next.handle(req);
        }

        const token = this.auth.getBearerToken();

        const headers = req.headers
            .set(RequestHeaders.AUTHORIZATION, token);
        const reqWithToken = req.clone({ headers });

        return next.handle(reqWithToken);
    }

}
