import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonUsageDemo } from './button-usage-demo';

describe('ButtonUsageDemo', () => {
  let component: ButtonUsageDemo;
  let fixture: ComponentFixture<ButtonUsageDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonUsageDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonUsageDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
