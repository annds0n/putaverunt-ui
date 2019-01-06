import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ContainerModule } from 'src/app/core';

import { SharedModule } from '../shared';
import { ThoughtFormComponent } from './thought-form.component';

@NgModule({
  declarations: [ThoughtFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    ContainerModule,
    SharedModule,
  ]
})
export class ThoughtFormModule { }
