import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { StandartError } from './standart-error';

export interface Config {
  test: boolean;
  apiUrlProd: string;
  apiUrlLocal: string;
}

export class Repository {

  handleError(error: HttpErrorResponse) {
      const standardError = typeof error.error === 'string' ? JSON.parse(error.error) as StandartError : error.error;
      return throwError(standardError.message);
    }

    get apiUrl(): string {
      return environment.apiUrl;
    }
}
