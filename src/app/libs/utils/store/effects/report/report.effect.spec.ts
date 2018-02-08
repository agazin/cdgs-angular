import { TestBed, inject } from '@angular/core/testing';

import { ReportEffect } from './report.effect';

describe('ReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportEffect]
    });
  });

  it('should be created', inject([ReportEffect], (service: ReportEffect) => {
    expect(service).toBeTruthy();
  }));
});
