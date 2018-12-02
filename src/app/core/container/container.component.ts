import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'pvt-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) { }

  user: User;

  ngOnInit() {
    this.authService.getUser()
    .subscribe({
      next: user => this.user = user,
      error: err => console.log(err)
    });
  }

}
