import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTimeBasic } from './sample-time-basic';

describe('SampleTimeBasic', () => {
  let component: SampleTimeBasic;
  let fixture: ComponentFixture<SampleTimeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTimeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTimeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
