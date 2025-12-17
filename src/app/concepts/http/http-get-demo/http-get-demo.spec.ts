import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetDemo } from './http-get-demo';

describe('HttpGetDemo', () => {
  let component: HttpGetDemo;
  let fixture: ComponentFixture<HttpGetDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpGetDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpGetDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
