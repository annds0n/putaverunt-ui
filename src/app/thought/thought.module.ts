import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContainerModule } from '../core';
import { ThoughtComponent } from './thought.component';
import { ThoughtRountingModule } from './thought.routing';

@NgModule({
  declarations: [ThoughtComponent],
  imports: [
    CommonModule,
    ThoughtRountingModule,
    ContainerModule
  ]
})
export class ThoughtModule { }
