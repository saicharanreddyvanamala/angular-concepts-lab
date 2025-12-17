import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpApiServiceDemo } from './http-api-service-demo';

describe('HttpApiServiceDemo', () => {
  let component: HttpApiServiceDemo;
  let fixture: ComponentFixture<HttpApiServiceDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpApiServiceDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpApiServiceDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
