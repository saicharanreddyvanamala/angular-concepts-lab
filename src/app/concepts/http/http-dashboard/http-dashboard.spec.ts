import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpDashboard } from './http-dashboard';

describe('HttpDashboard', () => {
  let component: HttpDashboard;
  let fixture: ComponentFixture<HttpDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
