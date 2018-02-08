import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvinceTableComponent } from './province-table.component';

describe('ProvinceTableComponent', () => {
  let component: ProvinceTableComponent;
  let fixture: ComponentFixture<ProvinceTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvinceTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvinceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
