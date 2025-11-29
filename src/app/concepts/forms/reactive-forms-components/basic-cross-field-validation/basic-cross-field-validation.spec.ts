import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCrossFieldValidation } from './basic-cross-field-validation';

describe('BasicCrossFieldValidation', () => {
  let component: BasicCrossFieldValidation;
  let fixture: ComponentFixture<BasicCrossFieldValidation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCrossFieldValidation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCrossFieldValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
