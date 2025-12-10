import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayBasic } from './delay-basic';

describe('DelayBasic', () => {
  let component: DelayBasic;
  let fixture: ComponentFixture<DelayBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
