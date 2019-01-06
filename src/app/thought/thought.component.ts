import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

import { Page } from '../core';
import { AuthenticationService } from '../core/authentication.service';
import { Thought, ThoughtService } from './shared';

@Component({
  selector: 'pvt-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss']
})
export class ThoughtComponent implements OnInit {

  page = new Page<Thought>();
  secret: string;

  constructor(
    private readonly _authService: AuthenticationService,
    private readonly service: ThoughtService
  ) { }

  ngOnInit() {

    const pageStream = this.service.getPage();
    const secretStream = this._authService.getSecretKey();
      forkJoin(pageStream, secretStream)
      .subscribe({
        next: ([page, secret]) => {
          this.page = page;
          this.secret = secret;
        },
        error: err => console.log(err)
      });

    }

}
