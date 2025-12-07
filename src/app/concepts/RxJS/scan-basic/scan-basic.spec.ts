import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanBasic } from './scan-basic';

describe('ScanBasic', () => {
  let component: ScanBasic;
  let fixture: ComponentFixture<ScanBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
