import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BottomMessage } from '../../core';
import { Thought, ThoughtService } from '../shared';

@Component({
  selector: 'pvt-thought-form',
  templateUrl: './thought-form.component.html',
  styleUrls: ['./thought-form.component.scss']
})
export class ThoughtFormComponent implements OnInit {

  thoughtForm: FormGroup;

  constructor(
    private readonly bottomMessage: BottomMessage,
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
        next: () => {
          this.bottomMessage.success('Adicionado com sucesso!');
          this.thoughtForm.reset();
        },
        error: err => this.bottomMessage.error(err)
      });
  }

}
