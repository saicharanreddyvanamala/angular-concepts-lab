import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupInFormArray } from './form-group-in-form-array';

describe('FormGroupInFormArray', () => {
  let component: FormGroupInFormArray;
  let fixture: ComponentFixture<FormGroupInFormArray>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupInFormArray]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupInFormArray);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
