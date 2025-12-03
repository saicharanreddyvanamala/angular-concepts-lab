import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLastBasic } from './first-last-basic';

describe('FirstLastBasic', () => {
  let component: FirstLastBasic;
  let fixture: ComponentFixture<FirstLastBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLastBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLastBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
