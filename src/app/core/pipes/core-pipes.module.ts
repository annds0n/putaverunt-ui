import { NgModule } from '@angular/core';

import { DecryptorPipe } from './decryptor.pipe';
import { PvtDatePipe } from './pvt-date.pipe';

@NgModule({
    exports: [DecryptorPipe, PvtDatePipe],
    declarations: [DecryptorPipe, PvtDatePipe],
})
export class CorePipesModule { }
