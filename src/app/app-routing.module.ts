import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticatedRouteGuard, LoginGuard } from './core';
import { PvtNotFoundComponent } from './core/components/pvt-not-found/pvt-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [LoginGuard]
  },
  {
    path: '',
    redirectTo: 'thoughts',
    pathMatch: 'full'
  },
  {
    path: 'thoughts',
    loadChildren: './thought/thought.module#ThoughtModule',
    canActivate: [AuthenticatedRouteGuard]
  },
  { path: '**', component: PvtNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
