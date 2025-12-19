import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDashboard } from './routing-dashboard';

describe('RoutingDashboard', () => {
  let component: RoutingDashboard;
  let fixture: ComponentFixture<RoutingDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
