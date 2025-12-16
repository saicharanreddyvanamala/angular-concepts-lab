import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatBasic } from './concat-basic';

describe('ConcatBasic', () => {
  let component: ConcatBasic;
  let fixture: ComponentFixture<ConcatBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
