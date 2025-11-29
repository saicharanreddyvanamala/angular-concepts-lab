import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypedReactiveFormDemo } from './typed-reactive-form-demo';

describe('TypedReactiveFormDemo', () => {
  let component: TypedReactiveFormDemo;
  let fixture: ComponentFixture<TypedReactiveFormDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypedReactiveFormDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypedReactiveFormDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
