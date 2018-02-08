import { Injectable, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { LOCAL_STORAGE } from '../common/local-storage/local-storage.provider';
import { LocalStorage } from '../common/local-storage/local-storage';
import { AUTH_URL } from './auth-url.provider';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    @Inject(LOCAL_STORAGE) private localStorage: LocalStorage,
    @Inject(AUTH_URL) private authURL: string,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let headers: HttpHeaders = req.headers;
    if (this.hasToken()) {
      headers = req.headers.set('Authorization', `Bearer ${this.getToken()}`);
    }

    if (!this.isLoggInRequest(req)) {
      headers = headers.set('content-type', 'application/json; charset=utf-8');
    }

    // disabled cache for IE
    headers = headers.set('content-type', 'application/json; charset=utf-8');
    headers = headers.set('Cache-Control', 'no-cache');
    headers = headers.set('Cache-Control', 'no-store');
    headers = headers.set('Pragma', 'no-cache');

    const appliedReq = req.clone({
      headers,
    });

    return next.handle(appliedReq);
  }

  hasToken() {
    return !!this.getToken();
  }

  getToken() {
    return this.localStorage.getItem('token_id');
  }

  isLoggInRequest(req: HttpRequest<any>) {
    return req.url === this.authURL;
  }

}
