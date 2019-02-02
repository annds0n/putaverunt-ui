import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserResolver } from '../core';
import { Thought } from './shared';
import { ThoughtFormGuard } from './thought-form.guard';
import { ThoughtFormComponent } from './thought-form/thought-form.component';
import { ThoughtComponent } from './thought.component';
import { ThoughtResolver } from './thought.resolver';

const routes: Routes = [
    {
        path: '',
        component: ThoughtComponent,
        resolve: {user: UserResolver},
    },
    {
        path: 'form',
        component: ThoughtFormComponent,
        canActivate: [ThoughtFormGuard]
    },
    {
        path: `form/:${Thought.ID}`,
        resolve: {thought: ThoughtResolver},
        component: ThoughtFormComponent,
        canActivate: [ThoughtFormGuard]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [RouterModule]
})
export class ThoughtRountingModule {

}
