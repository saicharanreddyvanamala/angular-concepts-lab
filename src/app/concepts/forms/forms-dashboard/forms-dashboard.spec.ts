import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDashboard } from './forms-dashboard';

describe('FormsDashboard', () => {
  let component: FormsDashboard;
  let fixture: ComponentFixture<FormsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
