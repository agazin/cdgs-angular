import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo002Component } from './demo002.component';

describe('Demo002Component', () => {
  let component: Demo002Component;
  let fixture: ComponentFixture<Demo002Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo002Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
