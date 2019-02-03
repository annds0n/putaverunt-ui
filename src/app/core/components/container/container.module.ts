import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from '../../authentication.service';
import { PerfilPipe } from '../../models';
import { ContainerComponent } from './container.component';

@NgModule({
  declarations: [ContainerComponent, PerfilPipe],
  exports: [ContainerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterModule
  ],
  providers: [AuthenticationService]
})
export class ContainerModule { }
