import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AuthenticationService } from './authentication.service';
import { BottomMessageModule, ContainerModule, PvtForbiddenModule } from './components';
import { AuthenticatedRouteGuard, LoginGuard } from './guards';
import { HttpErrorInterceptor, JWTHeaderInterceptor, LoaderInterceptor } from './interceptors';
import { CorePipesModule } from './pipes';
import { UserResolver } from './resolvers';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    CorePipesModule,
    BottomMessageModule,
    PvtForbiddenModule,
    NgxSpinnerModule
  ],
  exports: [ContainerModule, CorePipesModule, NgxSpinnerModule],
  providers: [
    AuthenticationService,
    LoginGuard,
    AuthenticatedRouteGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JWTHeaderInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true},
    UserResolver
  ]
})
export class CoreModule { }
