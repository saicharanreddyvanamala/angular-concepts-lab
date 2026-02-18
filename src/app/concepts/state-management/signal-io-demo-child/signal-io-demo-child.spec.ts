import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalIoDemoChild } from './signal-io-demo-child';

describe('SignalIoDemoChild', () => {
  let component: SignalIoDemoChild;
  let fixture: ComponentFixture<SignalIoDemoChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalIoDemoChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalIoDemoChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
