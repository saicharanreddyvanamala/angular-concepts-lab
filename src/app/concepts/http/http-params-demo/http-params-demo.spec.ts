import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpParamsDemo } from './http-params-demo';

describe('HttpParamsDemo', () => {
  let component: HttpParamsDemo;
  let fixture: ComponentFixture<HttpParamsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpParamsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpParamsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
