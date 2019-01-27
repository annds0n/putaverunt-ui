import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule, MatIconModule } from '@angular/material';

import { BottomMessage } from './bottom-message';
import { BottomMessageComponent } from './bottom-message.component';

@NgModule({
  declarations: [BottomMessageComponent],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    FlexLayoutModule,
    MatIconModule
  ],
  entryComponents: [BottomMessageComponent],
  providers: [BottomMessage]
})
export class BottomMessageModule { }
