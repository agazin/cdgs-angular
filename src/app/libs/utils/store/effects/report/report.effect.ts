import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { saveAs } from 'file-saver';
import { Store } from '@ngrx/store';

import { GET_REPORT_BY_CONDITION, GetReportByCondition } from '../../actions/report.action';
import { ReportService } from '../../../services/report/report.service';
import { ErrorMessage } from '../../actions/message.action';
import { RootState } from '../../../models/root-state';

@Injectable()
export class ReportEffect {

  constructor(
    private actions$: Actions,
    private store$: Store<RootState>,
    private reportService: ReportService,
  ) { }

  @Effect() getReport$ = this.actions$
    .ofType<GetReportByCondition>(GET_REPORT_BY_CONDITION)
    .withLatestFrom(this.store$.select(rootState => rootState.report.selectedReportType))
    .switchMap(([action, reportType]) =>
      this.reportService
        .getReport({ ...action.payload, reportType })
        .catch(() => Observable.of(new ErrorMessage('ไม่สามารถออกรายงานได้'))
        ));


}
