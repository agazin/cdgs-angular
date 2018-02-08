import { InjectionToken } from '@angular/core';

export const AUTH_URL = new InjectionToken<string>('Auth URL');

export const AUTH_URL_PROVIDER = {
  provide: AUTH_URL,
  useValue: '/api/v1/verify/user', // เปลี่ยนแปลง context route ของ authen service
};
