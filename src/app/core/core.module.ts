import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthenticationService } from './authentication.service';
import { AuthenticatedRouteGuard, LoginGuard } from './guards';
import { HttpErrorInterceptor, JWTHeaderInterceptor } from './interceptors';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [
    AuthenticationService,
    LoginGuard,
    AuthenticatedRouteGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JWTHeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
  ]
})
export class CoreModule { }
