import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private readonly spinnerLoader: NgxSpinnerService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        this.spinnerLoader.show();

        return next.handle(req)
            .pipe(catchError(err => {
                this.spinnerLoader.hide();
                return throwError(err);
            }))
            .pipe(tap((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    this.spinnerLoader.hide();
                }
            }));
    }
}
