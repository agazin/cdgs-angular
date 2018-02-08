import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovTableComponent } from './lov-table.component';

describe('LovTableComponent', () => {
  let component: LovTableComponent;
  let fixture: ComponentFixture<LovTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
