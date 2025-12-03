import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapBasic } from './concat-map-basic';

describe('ConcatMapBasic', () => {
  let component: ConcatMapBasic;
  let fixture: ComponentFixture<ConcatMapBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatMapBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatMapBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
