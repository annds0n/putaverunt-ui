import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Thought } from './shared';
import { ThoughtFormComponent } from './thought-form/thought-form.component';
import { ThoughtComponent } from './thought.component';
import { ThoughtResolver } from './thought.resolver';

const routes: Routes = [
    {
        path: '',
        component: ThoughtComponent
    },
    {
        path: 'form',
        component: ThoughtFormComponent
    },
    {
        path: `form/:${Thought.ID}`,
        resolve: {thought: ThoughtResolver},
        component: ThoughtFormComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class ThoughtRountingModule {

}
