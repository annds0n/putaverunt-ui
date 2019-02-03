import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ContainerModule } from '../container';
import { PvtNotFoundComponent } from './pvt-not-found.component';

@NgModule({
  declarations: [PvtNotFoundComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ContainerModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [PvtNotFoundComponent]
})
export class PvtForbiddenModule { }
