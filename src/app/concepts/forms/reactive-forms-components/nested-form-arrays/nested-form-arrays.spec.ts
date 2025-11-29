import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormArrays } from './nested-form-arrays';

describe('NestedFormArrays', () => {
  let component: NestedFormArrays;
  let fixture: ComponentFixture<NestedFormArrays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedFormArrays]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedFormArrays);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
