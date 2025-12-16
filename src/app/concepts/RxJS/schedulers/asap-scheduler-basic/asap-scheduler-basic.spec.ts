import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsapSchedulerBasic } from './asap-scheduler-basic';

describe('AsapSchedulerBasic', () => {
  let component: AsapSchedulerBasic;
  let fixture: ComponentFixture<AsapSchedulerBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsapSchedulerBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsapSchedulerBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
