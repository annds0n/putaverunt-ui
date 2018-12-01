import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThoughtComponent } from './thought.component';

const routes: Routes = [
    {
        path: '',
        component: ThoughtComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
})
export class ThoughtRountingModule {

}
