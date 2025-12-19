import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdOnpushChild } from './cd-onpush-child';

describe('CdOnpushChild', () => {
  let component: CdOnpushChild;
  let fixture: ComponentFixture<CdOnpushChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdOnpushChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdOnpushChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
