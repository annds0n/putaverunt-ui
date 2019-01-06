import { NgModule } from '@angular/core';

import { DecryptorPipe } from './decryptor.pipe';

@NgModule({
    exports: [DecryptorPipe],
    declarations: [DecryptorPipe],
})
export class CorePipesModule { }
