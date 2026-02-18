import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementDashboard } from './state-management-dashboard';

describe('StateManagementDashboard', () => {
  let component: StateManagementDashboard;
  let fixture: ComponentFixture<StateManagementDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateManagementDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateManagementDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
