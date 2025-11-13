import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParent } from './card-parent';

describe('CardParent', () => {
  let component: CardParent;
  let fixture: ComponentFixture<CardParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
