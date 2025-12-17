import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpAsyncGetDemo } from './http-async-get-demo';

describe('HttpAsyncGetDemo', () => {
  let component: HttpAsyncGetDemo;
  let fixture: ComponentFixture<HttpAsyncGetDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpAsyncGetDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpAsyncGetDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
