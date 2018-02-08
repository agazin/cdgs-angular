import { ActionReducer } from '@ngrx/store';

import * as MessageActions from '../actions/message.action';
import { MessageState } from '../../models/message';

type Action = MessageActions.ALL;

const initialState: MessageState = {
    message: [],
};

export function MessageReducer(state = initialState, action) {
    switch (action.type) {
        case MessageActions.CREATE_SUCCESS_MESSAGE:
            return {
                message: [{ severity: 'success', detail: 'บันทึกข้อมูลสำเร็จ', summary: 'ข้อความ' }]
            };
        case MessageActions.EDIT_SUCCESS_MESSAGE:
            return {
                message: [{ severity: 'success', detail: 'แก้ไขข้อมูลสำเร็จ', summary: 'ข้อความ' }]
            };
        case MessageActions.REMOVE_SUCCESS_MESSAGE:
            return {
                message: [{ severity: 'success', detail: 'ลบข้อมูลสำเร็จ', summary: 'ข้อความ' }]
            };
        case MessageActions.FETCH_SUCCESS_MESSAGE:
            return {
                ...state,
                message: [action.payload],
            };
        case MessageActions.SUCCESS_MESSAGE:
            return {
                ...state,
                message: [{ severity: 'success', detail: action.payload, summary: 'ข้อความ' }],
            };
        case MessageActions.INFO_MESSAGE:
            return {
                ...state,
                message: [{ severity: 'info', detail: action.payload, summary: 'ข้อความ' }],
            };
        case MessageActions.WARNING_MESSAGE:
            return {
                ...state,
                message: [{ severity: 'warn', detail: action.payload, summary: 'แจ้งเตือน' }],
            };
        case MessageActions.ERROR_MESSAGE:
            return {
                ...state,
                message: [{ severity: 'error', detail: action.payload, summary: 'เกิดข้อผิดพลาด' }],
            };
        case MessageActions.CLEAR_MESSAGE:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}
