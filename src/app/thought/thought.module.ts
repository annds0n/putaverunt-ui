import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatPaginatorModule } from '@angular/material';

import { ContainerModule } from '../core';
import { SharedModule } from './shared';
import { ThoughtFormModule } from './thought-form/thought-form.module';
import { ThoughtComponent } from './thought.component';
import { ThoughtRountingModule } from './thought.routing';

@NgModule({
  declarations: [ThoughtComponent],
  imports: [
    CommonModule,
    ThoughtRountingModule,
    ContainerModule,
    MatCardModule,
    ThoughtFormModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    SharedModule,
    MatPaginatorModule,
  ],
})
export class ThoughtModule { }
