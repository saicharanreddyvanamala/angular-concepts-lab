import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDashboard } from './rxjs-dashboard';

describe('RxjsDashboard', () => {
  let component: RxjsDashboard;
  let fixture: ComponentFixture<RxjsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
