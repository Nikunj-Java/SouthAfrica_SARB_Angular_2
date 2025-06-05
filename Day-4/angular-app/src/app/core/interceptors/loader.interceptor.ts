import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { StateService } from '../services/state.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private state: StateService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.state.setLoading(true);
    return next.handle(req).pipe(finalize(() => this.state.setLoading(false)));
  }
}
