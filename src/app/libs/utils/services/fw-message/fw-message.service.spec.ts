import { TestBed, inject } from '@angular/core/testing';

import { FwMessageService } from './fw-message.service';

describe('FwMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FwMessageService]
    });
  });

  it('should be created', inject([FwMessageService], (service: FwMessageService) => {
    expect(service).toBeTruthy();
  }));
});
