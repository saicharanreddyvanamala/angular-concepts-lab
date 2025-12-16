import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSchedulerBasic } from './async-scheduler-basic';

describe('AsyncSchedulerBasic', () => {
  let component: AsyncSchedulerBasic;
  let fixture: ComponentFixture<AsyncSchedulerBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncSchedulerBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSchedulerBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
