import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncValidatorsDemo } from './async-validators-demo';

describe('AsyncValidatorsDemo', () => {
  let component: AsyncValidatorsDemo;
  let fixture: ComponentFixture<AsyncValidatorsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncValidatorsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncValidatorsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
