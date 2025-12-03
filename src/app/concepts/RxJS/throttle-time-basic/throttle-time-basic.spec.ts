import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleTimeBasic } from './throttle-time-basic';

describe('ThrottleTimeBasic', () => {
  let component: ThrottleTimeBasic;
  let fixture: ComponentFixture<ThrottleTimeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThrottleTimeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrottleTimeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
