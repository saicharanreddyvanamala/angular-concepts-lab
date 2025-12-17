import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUpdateDeleteDemo } from './http-update-delete-demo';

describe('HttpUpdateDeleteDemo', () => {
  let component: HttpUpdateDeleteDemo;
  let fixture: ComponentFixture<HttpUpdateDeleteDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpUpdateDeleteDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpUpdateDeleteDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
