import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipWhileBasic } from './skip-while-basic';

describe('SkipWhileBasic', () => {
  let component: SkipWhileBasic;
  let fixture: ComponentFixture<SkipWhileBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipWhileBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipWhileBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
