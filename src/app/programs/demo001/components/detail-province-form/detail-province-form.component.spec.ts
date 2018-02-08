import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProvinceFormComponent } from './detail-province-form.component';

describe('DetailProvinceFormComponent', () => {
  let component: DetailProvinceFormComponent;
  let fixture: ComponentFixture<DetailProvinceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProvinceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProvinceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
