import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfFromIntervalTimer } from './of-from-interval-timer';

describe('OfFromIntervalTimer', () => {
  let component: OfFromIntervalTimer;
  let fixture: ComponentFixture<OfFromIntervalTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfFromIntervalTimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfFromIntervalTimer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
