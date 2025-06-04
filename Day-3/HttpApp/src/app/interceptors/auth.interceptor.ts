import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //return next.handle(request);
    // 1. clone the request and add authorization header
      const token=' Bearer sample-token-123';
      const cloneRequest=request.clone({
        setHeaders:{
          Authorization: token
        }
      });

    // 2. Handle the response and catch the errors
    return next.handle(cloneRequest).pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log('Http Error:',error);
        return throwError(()=>error);
      })
    )
  }
}
