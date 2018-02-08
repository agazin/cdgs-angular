import { ActionReducer } from '@ngrx/store';

import { ALL, RECIEVED_USER_DETAIL } from '../actions/user.action';
import { UserState } from '../../models/user/user-state';

type Action = ALL;

const initialState: UserState = {
    userDetail: {},
};

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case RECIEVED_USER_DETAIL:
            return {
                userDetail: action.payload,
            };
        default:
            return state;
    }
}

