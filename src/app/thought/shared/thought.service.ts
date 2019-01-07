import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Page, PageableFilter } from 'src/app/core';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { encryptText } from 'src/app/shared';

import { Thought } from './thought';
import { ThoughtRepository } from './thought.repository';

@Injectable()
export class ThoughtService {

    constructor(
        private readonly _repository: ThoughtRepository,
        private readonly _authService: AuthenticationService,
    ) { }

    create({ title, description }: Thought): Observable<Thought> {

        return this._authService.getSecretKey()
            .pipe(mergeMap(secret => {

                const encryptedTitle = encryptText(title, secret);
                const encryptedDescription = encryptText(description, secret);

                return this._repository.create(new Thought({ title: encryptedTitle, description: encryptedDescription }));
            }));
    }

    getPage(pageable?: PageableFilter): Observable<Page<Thought>> {
        return this._repository.getPage(pageable);
    }

    remove(thought: Thought): Observable<void> {
        return this._repository.remove(thought);
    }

}
