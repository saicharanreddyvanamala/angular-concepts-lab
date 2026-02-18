import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseTable } from './use-table';

describe('UseTable', () => {
  let component: UseTable;
  let fixture: ComponentFixture<UseTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
