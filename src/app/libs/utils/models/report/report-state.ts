import { ReportType } from './report-type';

export interface ReportState {
    reportTypeList?: ReportType[];
    selectedReportType?: ReportType;
}
