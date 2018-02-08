import {
    FETCH_LOV_CONFIG,
    FETCH_LOV_CONFIG_FAILURE,
    FETCH_LOV_CONFIG_SUCCESS,
    FetchLovConfig,
    FetchLovCOnfigFailure,
    FetchLovConfigSuccess,
    ALL,
} from '../actions/lov.action';
import { LovConfig } from '../../models/lov/lov-config';
import { LovState } from '../../models/lov/lov-state';

const initialState: LovState = {};

export function LovReducer(state: LovState = initialState, action: ALL): LovState {
    switch (action.type) {
        case FETCH_LOV_CONFIG_SUCCESS:
            return {
                ...state,
                ...action.payload
            };
        case FETCH_LOV_CONFIG_FAILURE:
            return initialState;
        default:
            return state;
    }
}

