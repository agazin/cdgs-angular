import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSubtitleComponent } from './page-subtitle.component';

describe('PageSubtitleComponent', () => {
  let component: PageSubtitleComponent;
  let fixture: ComponentFixture<PageSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
