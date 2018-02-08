import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProvinceFormComponent } from './edit-province-form.component';

describe('EditProvinceFormComponent', () => {
  let component: EditProvinceFormComponent;
  let fixture: ComponentFixture<EditProvinceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProvinceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProvinceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
