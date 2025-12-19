import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProfile } from './dashboard-profile';

describe('DashboardProfile', () => {
  let component: DashboardProfile;
  let fixture: ComponentFixture<DashboardProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
