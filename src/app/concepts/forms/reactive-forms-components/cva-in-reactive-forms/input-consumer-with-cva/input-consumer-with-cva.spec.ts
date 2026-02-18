import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputConsumerWithCva } from './input-consumer-with-cva';

describe('InputConsumerWithCva', () => {
  let component: InputConsumerWithCva;
  let fixture: ComponentFixture<InputConsumerWithCva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputConsumerWithCva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputConsumerWithCva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
