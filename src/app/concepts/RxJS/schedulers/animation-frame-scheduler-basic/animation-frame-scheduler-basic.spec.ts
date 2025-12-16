import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationFrameSchedulerBasic } from './animation-frame-scheduler-basic';

describe('AnimationFrameSchedulerBasic', () => {
  let component: AnimationFrameSchedulerBasic;
  let fixture: ComponentFixture<AnimationFrameSchedulerBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimationFrameSchedulerBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimationFrameSchedulerBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
