import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctBasic } from './distinct-basic';

describe('DistinctBasic', () => {
  let component: DistinctBasic;
  let fixture: ComponentFixture<DistinctBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
