import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicValidatorsDemo } from './basic-validators-demo';

describe('BasicValidatorsDemo', () => {
  let component: BasicValidatorsDemo;
  let fixture: ComponentFixture<BasicValidatorsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicValidatorsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicValidatorsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
