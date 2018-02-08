import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProvinceFormComponent } from './add-province-form.component';

describe('AddProvinceFormComponent', () => {
  let component: AddProvinceFormComponent;
  let fixture: ComponentFixture<AddProvinceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProvinceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProvinceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
