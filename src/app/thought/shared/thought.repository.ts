import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page, PageableFilter, Repository } from 'src/app/core';

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

    getPage(pageable?: PageableFilter): Observable<Page<Thought>> {
        if (pageable) {
            const params = new HttpParams()
            .set('page', pageable.page.toString())
            .set('size', pageable.size.toString());
            return this.http.get<Page<Thought>>(`${this.apiUrl}/thoughts`, {params});
        }

        return this.http.get<Page<Thought>>(`${this.apiUrl}/thoughts`);
    }

    remove(thought: Thought): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/thoughts/${thought.id}`);
    }

}
