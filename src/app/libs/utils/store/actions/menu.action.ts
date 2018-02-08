import { Action } from '@ngrx/store';

import { TreeMenu } from '../../models/menu/tree-menu';

export const FETCH_MENU = 'FETCH_MENU';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';
export const FORWARD_MENU_TO = 'FORWARD_MENU_TO';
export const BACKWARD_MENU_TO = 'BACKWARD_MENU_TO';
export const FILTERING_MENU = 'FILTERING_MENU';
export const BREADCRUMB_NAVIGATE_BY_ID = 'BREADCRUMB_NAVIGATE_BY_ID';

export class FetchMenu implements Action {
    readonly type = FETCH_MENU;
}

export class FetchMenuSuccess implements Action {
    readonly type = FETCH_MENU_SUCCESS;
    constructor(public payload: TreeMenu[]) { }
}

export class FetchMenuFailure implements Action {
    readonly type = FETCH_MENU_FAILURE;
}

export class ForwardMenuTo implements Action {
    readonly type = FORWARD_MENU_TO;
    constructor(public payload: TreeMenu) { }
}

export class BackwardMenuTo implements Action {
    readonly type = BACKWARD_MENU_TO;
    constructor(public payload: number) { }
}

export class FilteringMenu implements Action {
    readonly type = FILTERING_MENU;
    constructor(public payload: string) { }
}

export class BreadcrumbNavigateById implements Action {
    readonly type = BREADCRUMB_NAVIGATE_BY_ID;
    constructor(public payload: number) { }
}

export type ALL = FetchMenu
    | FilteringMenu
    | FetchMenuSuccess
    | FetchMenuFailure
    | BreadcrumbNavigateById
    | ForwardMenuTo
    | BackwardMenuTo;
