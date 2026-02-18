import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfForWithSignalsDemo } from './if-for-with-signals-demo';

describe('IfForWithSignalsDemo', () => {
  let component: IfForWithSignalsDemo;
  let fixture: ComponentFixture<IfForWithSignalsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfForWithSignalsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfForWithSignalsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
