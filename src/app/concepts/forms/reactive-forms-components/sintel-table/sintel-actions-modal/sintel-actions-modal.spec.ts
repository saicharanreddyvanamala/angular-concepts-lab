import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintelActionsModal } from './sintel-actions-modal';

describe('SintelActionsModal', () => {
  let component: SintelActionsModal;
  let fixture: ComponentFixture<SintelActionsModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SintelActionsModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintelActionsModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
