import { Action } from '@ngrx/store';

export const GOTO_QUERY = 'GOTO_QUERY';
export const GOTO_ADD = 'GOTO_ADD';
export const GOTO_EDIT = 'GOTO_EDIT';
export const GOTO_VIEW = 'GOTO_VIEW';

export class GotoQuery implements Action {
    readonly type = GOTO_QUERY;
}

export class GotoAdd implements Action {
    readonly type = GOTO_ADD;
}

export class GotoEdit implements Action {
    readonly type = GOTO_EDIT;
}

export class GotoView implements Action {
    readonly type = GOTO_VIEW;
}

export type ModeAction = GotoQuery
    | GotoAdd
    | GotoEdit
    | GotoView;

