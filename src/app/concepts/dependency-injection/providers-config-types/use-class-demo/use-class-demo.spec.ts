import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseClassDemo } from './use-class-demo';

describe('UseClassDemo', () => {
  let component: UseClassDemo;
  let fixture: ComponentFixture<UseClassDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseClassDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseClassDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
