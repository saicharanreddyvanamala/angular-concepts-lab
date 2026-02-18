import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintelTable } from './sintel-table';

describe('SintelTable', () => {
  let component: SintelTable;
  let fixture: ComponentFixture<SintelTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintelTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintelTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
