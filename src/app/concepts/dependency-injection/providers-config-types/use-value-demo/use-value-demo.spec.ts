import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseValueDemo } from './use-value-demo';

describe('UseValueDemo', () => {
  let component: UseValueDemo;
  let fixture: ComponentFixture<UseValueDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseValueDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseValueDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
