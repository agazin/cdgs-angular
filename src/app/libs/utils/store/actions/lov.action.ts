import { Action } from '@ngrx/store';
import { LovState } from '../../models/lov/lov-state';

export const FETCH_LOV_CONFIG = 'FETCH_LOV_CONFIG';
export const FETCH_LOV_CONFIG_SUCCESS = 'FETCH_LOV_CONFIG_SUCCESS';
export const FETCH_LOV_CONFIG_FAILURE = 'FETCH_LOV_CONFIG_FAILURE';

export class FetchLovConfig implements Action {
    readonly type = FETCH_LOV_CONFIG;
}

export class FetchLovConfigSuccess implements Action {
    readonly type = FETCH_LOV_CONFIG_SUCCESS;
    constructor(public payload: LovState) { }
}

export class FetchLovCOnfigFailure implements Action {
    readonly type = FETCH_LOV_CONFIG_FAILURE;
}

export type ALL = FetchLovConfig |
    FetchLovConfigSuccess |
    FetchLovCOnfigFailure;
