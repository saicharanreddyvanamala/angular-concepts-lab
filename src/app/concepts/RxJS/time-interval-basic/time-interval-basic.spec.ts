import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalBasic } from './time-interval-basic';

describe('TimeIntervalBasic', () => {
  let component: TimeIntervalBasic;
  let fixture: ComponentFixture<TimeIntervalBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeIntervalBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeIntervalBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
