import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeStampBasic } from './time-stamp-basic';

describe('TimeStampBasic', () => {
  let component: TimeStampBasic;
  let fixture: ComponentFixture<TimeStampBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeStampBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeStampBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
