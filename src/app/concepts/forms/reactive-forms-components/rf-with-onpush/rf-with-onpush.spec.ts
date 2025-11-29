import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfWithOnpush } from './rf-with-onpush';

describe('RfWithOnpush', () => {
  let component: RfWithOnpush;
  let fixture: ComponentFixture<RfWithOnpush>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RfWithOnpush]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfWithOnpush);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
