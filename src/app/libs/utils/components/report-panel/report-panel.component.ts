import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { trigger, state, style } from '@angular/animations';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { RootState } from '../../models/root-state';
import { ReportType } from '../../models/report';
import { SelectReportType } from '../../store/actions/report.action';

@Component({
  selector: 'cdgs-report-panel',
  templateUrl: './report-panel.component.html',
  styleUrls: ['./report-panel.component.scss'],
})
export class ReportPanelComponent implements OnInit, OnDestroy, OnChanges {

  @Input() type: string;

  reportTypeList: ReportType[] = [];
  reportType: FormControl = new FormControl(null);
  subscription: Subscription;

  constructor(
    private store$: Store<RootState>
  ) {
    this.setReportTypeList();
  }

  ngOnChanges() {
    this.checkReportType(this.type ? this.type.split(',') : []);
  }

  ngOnInit() {

  }

  setReportTypeList() {
    this.reportTypeList = [
      { typeName: 'docx', description: 'Microsoft Word', },
      { typeName: 'xlsx', description: 'Microsoft Excel', },
      { typeName: 'pdf', description: 'PDF', },
    ];
  }

  checkReportType(typeList: string[]) {
    if (typeList.length) {
      this.reportTypeList = typeList.reduce((acc, typeName) => {
        const type = this.reportTypeList.find(reportType => reportType.typeName === typeName);
        if (type) {
          acc = [...acc, type];
        }
        return acc;
      }, []);
    }
  }

  onSelectReportType() {
    this.subscription = this.reportType
      .valueChanges
      .do<ReportType>((reportType) =>
        this.store$.dispatch(new SelectReportType(reportType))
      )
      .subscribe();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
