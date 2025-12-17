import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCancelDemo } from './http-cancel-demo';

describe('HttpCancelDemo', () => {
  let component: HttpCancelDemo;
  let fixture: ComponentFixture<HttpCancelDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpCancelDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpCancelDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
