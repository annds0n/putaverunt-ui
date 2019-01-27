import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'pvt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(
    private readonly _router: Router,
    private readonly route: ActivatedRoute,
    private readonly authService: AuthenticationService
    ) { }

  user: User;

  ngOnInit() {
    this.authService.getUser()
    .subscribe({
      next: user => this.user = user,
      error: err => console.log(err)
    });
  }

  logoff() {
    this.authService.unauthenticate();
    console.log(this.route.snapshot.url);
    this._router.navigate([`/login`]);
  }

}
