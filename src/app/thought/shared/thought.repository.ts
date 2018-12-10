import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page, Repository } from 'src/app/core';

import { Thought } from './thought';

@Injectable()
export class ThoughtRepository extends Repository {

    constructor(
        // public readonly inject: Inject,
        private readonly http: HttpClient,
        ) {
            super();
        }

    create(thought: Thought): Observable<Thought> {
        return this.http.post<Thought>(`${this.apiUrl}/thoughts`, thought);
    }

    getPage(): Observable<Page<Thought>> {
        return this.http.get<Page<Thought>>(`${this.apiUrl}/thoughts`);
    }

}
