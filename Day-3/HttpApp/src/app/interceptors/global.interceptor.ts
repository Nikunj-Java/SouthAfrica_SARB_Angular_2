// global.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler,
  HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service'

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor(private spinner: SpinnerService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: { Authorization: 'Bearer dummy-token' }
    });

    this.spinner.show();

    return next.handle(authReq).pipe(
      tap(() => {}),
      catchError((error: HttpErrorResponse) => {
        console.error('Intercepted Error:', error.message);
        return throwError(() => error);
      }),
      finalize(() => this.spinner.hide())
    );
  }
}
