import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpTypedGetDemo } from './http-typed-get-demo';

describe('HttpTypedGetDemo', () => {
  let component: HttpTypedGetDemo;
  let fixture: ComponentFixture<HttpTypedGetDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpTypedGetDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpTypedGetDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
