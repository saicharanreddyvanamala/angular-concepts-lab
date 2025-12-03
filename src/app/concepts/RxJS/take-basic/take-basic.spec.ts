import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeBasic } from './take-basic';

describe('TakeBasic', () => {
  let component: TakeBasic;
  let fixture: ComponentFixture<TakeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
