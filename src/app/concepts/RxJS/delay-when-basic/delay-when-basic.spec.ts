import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayWhenBasic } from './delay-when-basic';

describe('DelayWhenBasic', () => {
  let component: DelayWhenBasic;
  let fixture: ComponentFixture<DelayWhenBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayWhenBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayWhenBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
