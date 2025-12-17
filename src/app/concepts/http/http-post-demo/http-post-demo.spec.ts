import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPostDemo } from './http-post-demo';

describe('HttpPostDemo', () => {
  let component: HttpPostDemo;
  let fixture: ComponentFixture<HttpPostDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpPostDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpPostDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
