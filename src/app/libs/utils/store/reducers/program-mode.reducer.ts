import { ActionReducer } from '@ngrx/store';

import { ModeAction, GOTO_ADD, GOTO_EDIT, GOTO_QUERY, GOTO_VIEW } from '../actions/program-mode.action';

type Action = ModeAction;

export function ProgramModeReducer(state = 'QUERY', action) {
    switch (action.type) {
        case GOTO_ADD:
            return 'ADD';
        case GOTO_EDIT:
            return 'EDIT';
        case GOTO_QUERY:
            return 'QUERY';
        case GOTO_VIEW:
            return 'VIEW';
        default:
            return state;
    }
}
