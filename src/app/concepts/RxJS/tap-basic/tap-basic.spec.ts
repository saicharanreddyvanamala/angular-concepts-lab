import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapBasic } from './tap-basic';

describe('TapBasic', () => {
  let component: TapBasic;
  let fixture: ComponentFixture<TapBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
