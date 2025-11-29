import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArrayBasic } from './form-array-basic';

describe('FormArrayBasic', () => {
  let component: FormArrayBasic;
  let fixture: ComponentFixture<FormArrayBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormArrayBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormArrayBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
