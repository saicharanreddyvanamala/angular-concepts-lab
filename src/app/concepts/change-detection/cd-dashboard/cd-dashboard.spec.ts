import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDashboard } from './cd-dashboard';

describe('CdDashboard', () => {
  let component: CdDashboard;
  let fixture: ComponentFixture<CdDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
