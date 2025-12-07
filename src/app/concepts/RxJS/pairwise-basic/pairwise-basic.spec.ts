import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairwiseBasic } from './pairwise-basic';

describe('PairwiseBasic', () => {
  let component: PairwiseBasic;
  let fixture: ComponentFixture<PairwiseBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairwiseBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairwiseBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
