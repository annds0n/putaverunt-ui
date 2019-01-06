import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Thought, ThoughtService } from '../shared';

@Component({
  selector: 'pvt-thought-form',
  templateUrl: './thought-form.component.html',
  styleUrls: ['./thought-form.component.scss']
})
export class ThoughtFormComponent implements OnInit {

  thoughtForm: FormGroup;

  constructor(

    private readonly service: ThoughtService,
    fb: FormBuilder,
  ) {
    this.thoughtForm = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  create() {
    const { title, description } = this.thoughtForm.value;
    const thought = new Thought({ title, description });

    this.service.create(thought)
      .subscribe({
        next: r => console.log(r),
        error: err => console.log(err)
      });
  }

}
