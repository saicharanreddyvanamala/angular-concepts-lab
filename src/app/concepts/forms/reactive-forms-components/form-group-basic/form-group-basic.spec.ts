import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupBasic } from './form-group-basic';

describe('FormGroupBasic', () => {
  let component: FormGroupBasic;
  let fixture: ComponentFixture<FormGroupBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
