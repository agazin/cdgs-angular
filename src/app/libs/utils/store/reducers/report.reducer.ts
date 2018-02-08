import { ActionReducer } from '@ngrx/store';

import * as ReportActions from '../actions/report.action';
import { ReportState } from '../../models/report';
import { SELECT_REPORT_TYPE } from '../actions/report.action';

type Action = ReportActions.ALL;
const initialState: ReportState = {
    reportTypeList: [
        { typeName: 'docx', description: 'Microsoft Word', },
        { typeName: 'xlsx', description: 'Microsoft Excel', },
        { typeName: 'pdf', description: 'PDF', },
    ],
    selectedReportType: {},
};

export function ReportReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_REPORT_TYPE:
            return {
                ...state,
                selectedReportType: action.payload,
            };
    }
    return state;
}
