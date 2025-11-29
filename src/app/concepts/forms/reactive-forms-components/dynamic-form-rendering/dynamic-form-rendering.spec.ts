import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormRendering } from './dynamic-form-rendering';

describe('DynamicFormRendering', () => {
  let component: DynamicFormRendering;
  let fixture: ComponentFixture<DynamicFormRendering>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormRendering]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormRendering);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
