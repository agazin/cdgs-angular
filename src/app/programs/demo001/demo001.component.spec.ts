import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo001Component } from './demo001.component';

describe('Demo001Component', () => {
  let component: Demo001Component;
  let fixture: ComponentFixture<Demo001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
