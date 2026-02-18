import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputConsumerWithoutCva } from './input-consumer-without-cva';

describe('InputConsumerWithoutCva', () => {
  let component: InputConsumerWithoutCva;
  let fixture: ComponentFixture<InputConsumerWithoutCva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputConsumerWithoutCva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputConsumerWithoutCva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
