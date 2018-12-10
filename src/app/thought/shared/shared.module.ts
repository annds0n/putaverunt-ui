import { NgModule } from '@angular/core';

import { ThoughtRepository } from './thought.repository';
import { ThoughtService } from './thought.service';

@NgModule({
    providers: [ThoughtRepository, ThoughtService],
})
export class SharedModule { }
