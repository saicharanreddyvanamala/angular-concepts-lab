import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlBasic } from './form-control-basic';

describe('FormControlBasic', () => {
  let component: FormControlBasic;
  let fixture: ComponentFixture<FormControlBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormControlBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormControlBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
