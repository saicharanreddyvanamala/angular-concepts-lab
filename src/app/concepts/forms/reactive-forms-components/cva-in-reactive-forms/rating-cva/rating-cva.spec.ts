import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingCva } from './rating-cva';

describe('RatingCva', () => {
  let component: RatingCva;
  let fixture: ComponentFixture<RatingCva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatingCva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingCva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
