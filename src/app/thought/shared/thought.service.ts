import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/core';

import { Thought } from './thought';
import { ThoughtRepository } from './thought.repository';

@Injectable()
export class ThoughtService {

    constructor(private readonly _repository: ThoughtRepository) { }

    create(thought: Thought): Observable<Thought> {
        return this._repository.create(thought);
    }

    getPage(): Observable<Page<Thought>> {
        return this._repository.getPage();
    }
}
