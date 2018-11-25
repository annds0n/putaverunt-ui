import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { User } from '../shared/models';
import { RequestHeaders, Service, UserCredentials } from './models';

enum Storage {
    TOKEN = 'authToken',
    USER = 'user',
}

@Injectable()
export class AuthenticationService extends Service {

    constructor(private readonly http: HttpClient) {
        super();
     }

    authenticate(userCredentials: UserCredentials): Observable<void> {

        return this.http
        .post(`${this.apiUrl}/login`, userCredentials, {
            observe: 'response',
            responseType: 'text'
        })
        .pipe(catchError(this.handleError))
        .pipe(mergeMap(response => {
            this._saveToken(response);
            return this._loadUser();
        }));

    }

    isAuthenticated(): Observable<boolean> {
        if (!!(localStorage.getItem(Storage.TOKEN))) {
            return this.http.get<boolean>(`${this.apiUrl}/validate-token`);
        }

        return of(false);
    }

    unauthenticate() {
        localStorage.removeItem(Storage.TOKEN);
        localStorage.removeItem(Storage.USER);
    }

    private _saveToken(response: HttpResponse<string>) {
        const fullToken = response.headers.get(RequestHeaders.AUTHORIZATION);
        const token = fullToken.substring(7, fullToken.length);
        localStorage.setItem(Storage.TOKEN, token);
    }

    getBearerToken(): string {
        const token = localStorage.getItem(Storage.TOKEN);
        return `Bearer ${token}`;
    }

    getUser() {
        const user: User = JSON.parse(localStorage.getItem(Storage.USER));
        return  user;
    }

    private _loadUser(): Observable<void> {
        return this.http.get<User>(`${this.apiUrl}/users/principal`)
        .pipe(catchError(this.handleError))
        .pipe(map(user => {
                this._storeUser(user);
            })
        );
    }

    private _storeUser(user: User) {
        localStorage.setItem(Storage.USER, JSON.stringify(user));
    }
}
