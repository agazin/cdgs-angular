import { Action } from '@ngrx/store';

import { ReportRequest, ReportType } from '../../models/report';

export const GET_REPORT_BY_CONDITION = 'GET_REPORT_BY_CONDITION';
export const SELECT_REPORT_TYPE = 'SELECT_REPORT_TYPE';

/**
 * @argument payload
 * payload คือ เงื่อนไขของ report ที่ต้องการจะออก กับ reportLink
 */
export class GetReportByCondition implements Action {
    readonly type = GET_REPORT_BY_CONDITION;
    constructor(public payload: ReportRequest) { }
}

export class SelectReportType implements Action {
    readonly type = SELECT_REPORT_TYPE;
    constructor(public payload: ReportType) { }
}

export type ALL = SelectReportType
    | GetReportByCondition;
