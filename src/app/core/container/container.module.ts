import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';

import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [ContainerComponent],
  exports: [ContainerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
  ]
})
export class ContainerModule { }
