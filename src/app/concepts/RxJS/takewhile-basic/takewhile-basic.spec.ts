import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakewhileBasic } from './takewhile-basic';

describe('TakewhileBasic', () => {
  let component: TakewhileBasic;
  let fixture: ComponentFixture<TakewhileBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakewhileBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakewhileBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
