import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTimeBasic } from './audit-time-basic';

describe('AuditTimeBasic', () => {
  let component: AuditTimeBasic;
  let fixture: ComponentFixture<AuditTimeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditTimeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditTimeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
