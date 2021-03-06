import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
        return this.http.post<Thought>(`${this.apiUrl}/thoughts`, thought)
        .pipe(catchError(this.handleError));
    }

    get(id: number): Observable<Thought> {
        return this.http.get<Thought>(`${this.apiUrl}/thoughts/${id}`)
        .pipe(catchError(this.handleError));
    }

    update(thought: Thought): Observable<Thought> {
        return this.http.put<Thought>(`${this.apiUrl}/thoughts/${thought.id}`, thought)
        .pipe(catchError(this.handleError));
    }

    getPage(pageable?: PageableFilter): Observable<Page<Thought>> {
        if (pageable) {
            const params = new HttpParams()
            .set('page', pageable.page.toString())
            .set('size', pageable.size.toString());
            return this.http.get<Page<Thought>>(`${this.apiUrl}/thoughts`, {params})
            .pipe(catchError(this.handleError));
        }

        return this.http.get<Page<Thought>>(`${this.apiUrl}/thoughts`)
        .pipe(catchError(this.handleError));
    }

    remove(thought: Thought): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/thoughts/${thought.id}`)
        .pipe(catchError(this.handleError));
    }

}
