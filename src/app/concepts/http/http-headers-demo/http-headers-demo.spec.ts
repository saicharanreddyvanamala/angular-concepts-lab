import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpHeadersDemo } from './http-headers-demo';

describe('HttpHeadersDemo', () => {
  let component: HttpHeadersDemo;
  let fixture: ComponentFixture<HttpHeadersDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpHeadersDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpHeadersDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
