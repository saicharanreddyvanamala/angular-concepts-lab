import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithoutCva } from './input-without-cva';

describe('InputWithoutCva', () => {
  let component: InputWithoutCva;
  let fixture: ComponentFixture<InputWithoutCva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputWithoutCva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithoutCva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
