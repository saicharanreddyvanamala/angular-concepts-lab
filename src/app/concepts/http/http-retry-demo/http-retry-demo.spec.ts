import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpRetryDemo } from './http-retry-demo';

describe('HttpRetryDemo', () => {
  let component: HttpRetryDemo;
  let fixture: ComponentFixture<HttpRetryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpRetryDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpRetryDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
