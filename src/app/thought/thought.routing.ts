import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThoughtFormComponent } from './thought-form/thought-form.component';
import { ThoughtComponent } from './thought.component';

const routes: Routes = [
    {
        path: '',
        component: ThoughtComponent
    },
    {
        path: 'form',
        component: ThoughtFormComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class ThoughtRountingModule {

}
