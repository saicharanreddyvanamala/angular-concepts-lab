import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinelatestBasic } from './combinelatest-basic';

describe('CombinelatestBasic', () => {
  let component: CombinelatestBasic;
  let fixture: ComponentFixture<CombinelatestBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombinelatestBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombinelatestBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
