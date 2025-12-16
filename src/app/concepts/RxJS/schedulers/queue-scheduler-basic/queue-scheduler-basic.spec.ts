import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueSchedulerBasic } from './queue-scheduler-basic';

describe('QueueSchedulerBasic', () => {
  let component: QueueSchedulerBasic;
  let fixture: ComponentFixture<QueueSchedulerBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QueueSchedulerBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueueSchedulerBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
