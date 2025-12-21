import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiBasicDemo } from './di-basic-demo';

describe('DiBasicDemo', () => {
  let component: DiBasicDemo;
  let fixture: ComponentFixture<DiBasicDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiBasicDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiBasicDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
