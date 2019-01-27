import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { decryptText } from 'src/app/shared';

import { BottomMessage } from '../../core';
import { Thought, ThoughtService } from '../shared';

@Component({
  selector: 'pvt-thought-form',
  templateUrl: './thought-form.component.html',
  styleUrls: ['./thought-form.component.scss']
})
export class ThoughtFormComponent implements OnInit {

  thoughtForm: FormGroup;
  thought: Thought;

  constructor(
    private readonly bottomMessage: BottomMessage,
    private readonly service: ThoughtService,
    private readonly _authService: AuthenticationService,
    fb: FormBuilder,
    private readonly _route: ActivatedRoute,
    private readonly _router: Router
  ) {
    this.thoughtForm = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {

    this._route.data
      .pipe(switchMap(({ thought }) => {
        this.thought = thought;
        if (thought) {
          return this._authService.getSecretKey();
        }
        return of(null);
      }))
      .pipe(filter(key => !!key))
      .subscribe({
        next: key => this._setValuesOnForm(key),
        error: err => this.bottomMessage.error(err)
      });

  }

  private _setValuesOnForm(key: string) {
    this.thoughtForm.setValue({
      title: decryptText(this.thought.title, key),
      description: decryptText(this.thought.description, key),
    });
  }

  save() {
    const { title, description } = this.thoughtForm.value;

    if (this.thought) {
      const thought = new Thought({ title, description, id: this.thought.id });
      this.service.update(thought)
      .subscribe({
        next: () => {
            this.bottomMessage.success('Salvo com sucesso!');
        },
        error: err => this.bottomMessage.error(err)
      });

    } else {
      const thought = new Thought({ title, description });
      this.service.create(thought)
        .subscribe({
          next: () => {
              this.bottomMessage.success('Salvo com sucesso!');
                this.thoughtForm.reset();
          },
          error: err => this.bottomMessage.error(err)
        });
    }
  }

  back(): void {
    if (this.thought) {
      this._router.navigate(['../..'], {relativeTo: this._route});
    } else {
      this._router.navigate(['..'], {relativeTo: this._route});
    }
  }

}
