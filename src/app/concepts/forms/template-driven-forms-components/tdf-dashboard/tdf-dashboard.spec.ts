import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfDashboard } from './tdf-dashboard';

describe('TdfDashboard', () => {
  let component: TdfDashboard;
  let fixture: ComponentFixture<TdfDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdfDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
