import { NgModule } from '@angular/core';

import { ConfirmDeleteDialogModule } from './confirm-delete-dialog';
import { ThoughtRepository } from './thought.repository';
import { ThoughtService } from './thought.service';

@NgModule({
    imports: [ConfirmDeleteDialogModule],
    exports: [ConfirmDeleteDialogModule],
    providers: [ThoughtRepository, ThoughtService],
})
export class SharedModule { }
