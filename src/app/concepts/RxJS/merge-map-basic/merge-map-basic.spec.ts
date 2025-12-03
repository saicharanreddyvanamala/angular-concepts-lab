import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapBasic } from './merge-map-basic';

describe('MergeMapBasic', () => {
  let component: MergeMapBasic;
  let fixture: ComponentFixture<MergeMapBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeMapBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeMapBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
