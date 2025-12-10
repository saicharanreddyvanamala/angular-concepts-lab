import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceBasic } from './reduce-basic';

describe('ReduceBasic', () => {
  let component: ReduceBasic;
  let fixture: ComponentFixture<ReduceBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReduceBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduceBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
