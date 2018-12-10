import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { ContainerModule } from './container';
import { AuthenticatedRouteGuard, LoginGuard } from './guards';
import { HttpErrorInterceptor, JWTHeaderInterceptor } from './interceptors';
import { UserResolver } from './resolvers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [ContainerModule],
  providers: [
    AuthenticationService,
    LoginGuard,
    AuthenticatedRouteGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JWTHeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    UserResolver
  ]
})
export class CoreModule { }
