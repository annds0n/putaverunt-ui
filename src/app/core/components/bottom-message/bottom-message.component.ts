import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

import { BottomMessageData, MessageType } from './bottom-message';

@Component({
  selector: 'pvt-bottom-message',
  templateUrl: './bottom-message.component.html',
  styleUrls: ['./bottom-message.component.scss']
})
export class BottomMessageComponent {

  message: string;
  type: MessageType;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) data: BottomMessageData) {
    this.message = data.message;
    this.type = data.type;
  }

}
