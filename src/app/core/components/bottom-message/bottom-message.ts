import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material';

import { BottomMessageComponent } from './bottom-message.component';

export enum MessageType {
    Success = 'SUCCESS',
    Error = 'ERROR'
}

export interface BottomMessageData {
    message: string;
    type: MessageType;
}

@Injectable()
export class BottomMessage {

    constructor(private bottomSheet: MatBottomSheet) {}

    error(errorMessage: string): void {
        const data: BottomMessageData = {
            message: errorMessage,
            type: MessageType.Error
        };
        this.bottomSheet.open(BottomMessageComponent, {data, panelClass: 'root-message-container'});
    }

    success(successMessage: string): void {
        const data: BottomMessageData = {
            message: successMessage,
            type: MessageType.Success
        };
        this.bottomSheet.open(BottomMessageComponent, {data, panelClass: 'root-message-container'});
    }
}
