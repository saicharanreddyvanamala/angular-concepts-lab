import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithCva } from './input-with-cva';

describe('InputWithCva', () => {
  let component: InputWithCva;
  let fixture: ComponentFixture<InputWithCva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithCva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithCva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
