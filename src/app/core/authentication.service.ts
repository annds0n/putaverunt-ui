import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sha512 } from 'js-sha512';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { Repository, RequestHeaders, UserCredentials } from './models';
import { User } from './models/user';

enum Storage {
    TOKEN = 'authToken',
    USER = 'user',
}

@Injectable()
export class AuthenticationService extends Repository {

    constructor(private readonly http: HttpClient) {
        super();
    }

    authenticate({ password, userName }: UserCredentials): Observable<User> {

        const passwordEncrypted = sha512(password);

        const login = new UserCredentials({ userName, password: passwordEncrypted });

        return this.http
            .post(`${this.apiUrl}/login`, login, {
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

    getUser(): Observable<User> {
        const user: User = JSON.parse(localStorage.getItem(Storage.USER));

        if (!user) {
            return this._loadUser();
        }

        return of(user);
    }

    _loadUser(): Observable<User> {
        return this.http.get<User>(`${this.apiUrl}/users/principal`)
            // .pipe(catchError(this.handleError))
            .pipe(map(user => {
                this._storeUser(user);
                return user;
            })
            );
    }

    private _storeUser(user: User) {
        localStorage.setItem(Storage.USER, JSON.stringify(user));
    }

    getSecretKey(): Observable<string> {
        return this.http.get(`${this.apiUrl}/secret-key`, {responseType: 'text'
        });
    }
}
