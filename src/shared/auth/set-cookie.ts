import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SameSiteInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cookie = req.headers.get('Cookie');
    if (cookie) {
      const newHeader = cookie + '; SameSite=None';
      req = req.clone({
        headers: req.headers.set('Cookie', newHeader),
      });
    }
    return next.handle(req);
  }
}
