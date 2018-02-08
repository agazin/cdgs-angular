import { Action } from '@ngrx/store';

import { UserDetail } from '../../models/user/user-detail';

export const FETCH_USER_DETAIL = 'FETCH_USER_DETAIL';
export const RECIEVED_USER_DETAIL = 'RECIEVED_USER_DETAIL';

export class FetchUserDetail implements Action {
    readonly type = FETCH_USER_DETAIL;
}

export class RecievedUserDetail implements Action {
    readonly type = RECIEVED_USER_DETAIL;
    constructor(public payload: UserDetail) { }
}

export type ALL = FetchUserDetail
    | RecievedUserDetail;
