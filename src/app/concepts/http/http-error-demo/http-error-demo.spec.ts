import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpErrorDemo } from './http-error-demo';

describe('HttpErrorDemo', () => {
  let component: HttpErrorDemo;
  let fixture: ComponentFixture<HttpErrorDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpErrorDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpErrorDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
