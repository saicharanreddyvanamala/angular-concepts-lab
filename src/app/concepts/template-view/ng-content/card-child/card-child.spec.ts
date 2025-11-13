import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChild } from './card-child';

describe('CardChild', () => {
  let component: CardChild;
  let fixture: ComponentFixture<CardChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
