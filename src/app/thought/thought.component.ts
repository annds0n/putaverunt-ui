import { Component, OnInit } from '@angular/core';

import { Page } from '../core';
import { Thought, ThoughtService } from './shared';

@Component({
  selector: 'pvt-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.scss']
})
export class ThoughtComponent implements OnInit {

  page = new Page<Thought>();

  constructor(private readonly service: ThoughtService) { }

  ngOnInit() {
    this.service.getPage()
    .subscribe({
      next: page => this.page = page,
      error: err => console.log(err)
    });
  }

}
