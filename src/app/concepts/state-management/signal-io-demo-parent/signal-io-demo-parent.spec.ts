import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalIoDemoParent } from './signal-io-demo-parent';

describe('SignalIoDemoParent', () => {
  let component: SignalIoDemoParent;
  let fixture: ComponentFixture<SignalIoDemoParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalIoDemoParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalIoDemoParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
