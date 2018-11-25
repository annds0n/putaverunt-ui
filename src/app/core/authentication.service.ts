import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RequestHeaders, Service, UserCredentials } from './models';

@Injectable()
export class AuthenticationService extends Service {

    constructor(private readonly http: HttpClient) {
        super();
     }

    authenticate(userCredentials: UserCredentials) {
        console.log(this.apiUrl);
        this.http
        .post(`${this.apiUrl}/login`, userCredentials, {
            observe: 'response',
            responseType: 'text'
        })
        .pipe(catchError(this.handleError))
        .subscribe(response => {
            this._saveToken(response);
        });

    }

    isAuthenticated(): Observable<boolean> {
        if (!!(localStorage.getItem('authToken'))) {
            return this.http.get<boolean>(`${this.apiUrl}/validate-token`);
        }

        return of(false);
    }

    unauthenticate() {
        localStorage.removeItem('authToken');
    }

    private _saveToken(response: HttpResponse<string>) {
        const fullToken = response.headers.get(RequestHeaders.AUTHORIZATION);
        const token = fullToken.substring(7, fullToken.length);
        localStorage.setItem('authToken', token);
    }

    getBearerToken(): string {
        const token = localStorage.getItem('authToken');
        return `Bearer ${token}`;
    }
}
