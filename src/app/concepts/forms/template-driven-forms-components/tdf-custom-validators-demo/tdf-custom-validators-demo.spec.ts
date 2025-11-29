import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfCustomValidatorsDemo } from './tdf-custom-validators-demo';

describe('TdfCustomValidatorsDemo', () => {
  let component: TdfCustomValidatorsDemo;
  let fixture: ComponentFixture<TdfCustomValidatorsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdfCustomValidatorsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdfCustomValidatorsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
