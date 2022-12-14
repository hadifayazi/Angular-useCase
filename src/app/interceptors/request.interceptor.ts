import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method === 'GET') {
      const newRequest = request.clone({
        headers: new HttpHeaders({ 'content-type': 'application/json' }),
      });

      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
