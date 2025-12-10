import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoutBasic } from './timeout-basic';

describe('TimeoutBasic', () => {
  let component: TimeoutBasic;
  let fixture: ComponentFixture<TimeoutBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeoutBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeoutBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
