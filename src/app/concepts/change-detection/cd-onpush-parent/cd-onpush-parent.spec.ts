import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdOnpushParent } from './cd-onpush-parent';

describe('CdOnpushParent', () => {
  let component: CdOnpushParent;
  let fixture: ComponentFixture<CdOnpushParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdOnpushParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdOnpushParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
