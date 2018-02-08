import { ReportType } from './report-type';

export interface ReportRequest {
    condition?: object;
    reportType?: ReportType;
    reportLink?: string;
    reportName?: string;
}
