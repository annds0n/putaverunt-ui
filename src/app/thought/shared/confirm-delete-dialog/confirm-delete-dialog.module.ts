import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog.component';

@NgModule({
  declarations: [ConfirmDeleteDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [ConfirmDeleteDialogComponent],
  entryComponents: [ConfirmDeleteDialogComponent]

})
export class ConfirmDeleteDialogModule { }
