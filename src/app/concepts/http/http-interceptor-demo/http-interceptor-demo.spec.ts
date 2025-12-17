import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpInterceptorDemo } from './http-interceptor-demo';

describe('HttpInterceptorDemo', () => {
  let component: HttpInterceptorDemo;
  let fixture: ComponentFixture<HttpInterceptorDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpInterceptorDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpInterceptorDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
