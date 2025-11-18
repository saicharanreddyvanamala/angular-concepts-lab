import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureVsImpureDemo } from './pure-vs-impure-demo';

describe('PureVsImpureDemo', () => {
  let component: PureVsImpureDemo;
  let fixture: ComponentFixture<PureVsImpureDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PureVsImpureDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureVsImpureDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
