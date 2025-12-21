import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiDashboard } from './di-dashboard';

describe('DiDashboard', () => {
  let component: DiDashboard;
  let fixture: ComponentFixture<DiDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
