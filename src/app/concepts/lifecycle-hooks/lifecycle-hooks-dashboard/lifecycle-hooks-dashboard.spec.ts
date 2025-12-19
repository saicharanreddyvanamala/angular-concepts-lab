import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHooksDashboard } from './lifecycle-hooks-dashboard';

describe('LifecycleHooksDashboard', () => {
  let component: LifecycleHooksDashboard;
  let fixture: ComponentFixture<LifecycleHooksDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleHooksDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleHooksDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
