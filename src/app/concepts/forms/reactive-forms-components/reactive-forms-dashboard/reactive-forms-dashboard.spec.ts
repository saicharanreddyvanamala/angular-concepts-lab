import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsDashboard } from './reactive-forms-dashboard';

describe('ReactiveFormsDashboard', () => {
  let component: ReactiveFormsDashboard;
  let fixture: ComponentFixture<ReactiveFormsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
