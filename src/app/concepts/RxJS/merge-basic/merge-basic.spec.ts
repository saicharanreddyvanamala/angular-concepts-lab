import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeBasic } from './merge-basic';

describe('MergeBasic', () => {
  let component: MergeBasic;
  let fixture: ComponentFixture<MergeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MergeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
