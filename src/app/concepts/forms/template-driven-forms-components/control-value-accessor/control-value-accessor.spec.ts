import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValueAccessor } from './custom-value-accessor';

describe('CustomValueAccessor', () => {
  let component: CustomValueAccessor;
  let fixture: ComponentFixture<CustomValueAccessor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomValueAccessor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomValueAccessor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
