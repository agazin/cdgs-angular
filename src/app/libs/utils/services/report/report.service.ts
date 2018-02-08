import { Injectable, Inject } from '@angular/core';
import { HttpClient, } from '@angular/common/http';

import { ReportRequest } from '../../models/report';
import { CONTEXT_URL } from '../../common/context-url/context-url';

@Injectable()
export class ReportService {

  constructor(
    private http$: HttpClient,
    @Inject(CONTEXT_URL) private contextURL: string,
  ) { }

  getReport(req: ReportRequest) {
    return this.http$
      .post(`${this.contextURL}/${req.reportLink}`, req.condition,
      { responseType: 'blob' })
      .do((res) => saveAs(res, `${req.reportName}.${req.reportType.typeName}`));
  }

}
