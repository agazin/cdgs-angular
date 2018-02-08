import { InjectionToken } from '@angular/core';


export const CONTEXT_URL = new InjectionToken<string>('กำหนด context route สำหรับ request URL');

export const REST_CONTEXT_URL = {
    provide: CONTEXT_URL,
    useValue: '/example/api'
};

export const LOV_CONTEXT_URL = {
    provide: CONTEXT_URL,
    useValue: '/cdgsTemplateServices/api/template/query',
};
