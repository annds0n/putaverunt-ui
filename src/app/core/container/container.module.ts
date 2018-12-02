import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material';

import { AuthenticationService } from '../authentication.service';
import { PerfilPipe } from '../models';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [ContainerComponent, PerfilPipe],
  exports: [ContainerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [AuthenticationService]
})
export class ContainerModule { }
