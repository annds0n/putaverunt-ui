import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
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
    FlexLayoutModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ThoughtFormModule { }
