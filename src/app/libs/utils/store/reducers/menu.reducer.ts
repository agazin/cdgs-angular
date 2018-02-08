import { ActionReducer } from '@ngrx/store';
import { FormControl } from '@angular/forms';

import {
    ALL, FETCH_MENU,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    FORWARD_MENU_TO,
    BACKWARD_MENU_TO,
    FILTERING_MENU,
    BREADCRUMB_NAVIGATE_BY_ID
} from '../actions/menu.action';
import { MenuState } from '../../models/menu/menu-state';

type Action = ALL;

const initialState: MenuState = {
    currentMenu: {},
    menuHistory: [],
    menuList: [],
    isFetching: false,
    invalidate: false,
    breadcrumb: [],
    menuQuery: new FormControl(null),
};

export function MenuReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MENU:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_MENU_SUCCESS:
            return {
                ...state,
                isFetching: false,
                menuList: action.payload,
                currentMenu: {
                    data: { id: null },
                    children: action.payload,
                },
                menuHistory: [
                    ...state.menuHistory,
                    {
                        data: { id: null },
                        children: action.payload
                    },
                ],
            };
        case FETCH_MENU_FAILURE:
            return {
                ...state,
                isFetching: false,
                invalidate: true,
            };
        case FORWARD_MENU_TO:
            const selectedMenu = action.payload;
            return {
                ...state,
                currentMenu: { ...selectedMenu },
                menuHistory: [...state.menuHistory, selectedMenu],
                menuList: [...selectedMenu.children],
                breadcrumb: [
                    ...state.breadcrumb,
                    { label: selectedMenu.data.label, id: `${selectedMenu.data.id}` },
                ],
                menuQuery: new FormControl(null),
            };
        case BREADCRUMB_NAVIGATE_BY_ID:
        case BACKWARD_MENU_TO:
            const menuId = action.payload;
            const index = state.menuHistory
                .findIndex(menu => menu.data.id === menuId);
            const breadcrumbIndex = state.breadcrumb.findIndex(item => +item.id === menuId);
            const menuHistory = state.menuHistory.slice(0, index + 1);
            const targetBacward = state.menuHistory.find(menu => menu.data.id === menuId);
            return {
                ...state,
                currentMenu: { ...targetBacward },
                menuList: [...targetBacward.children],
                menuHistory,
                breadcrumb: state.breadcrumb.slice(0, breadcrumbIndex + 1),
                menuQuery: new FormControl(null),
            };
        case FILTERING_MENU:
            if (action.payload) {
                const regexQuery = new RegExp(action.payload.toLocaleUpperCase(), 'g');
                state = {
                    ...state,
                    menuList: state.currentMenu.children
                        .filter(menu =>
                            menu.data.label.toLocaleUpperCase().match(regexQuery)),
                };
            } else {
                state = {
                    ...state,
                    menuList: [...state.currentMenu.children],
                };
            }
            return state;
        default:
            return state;
    }
}

