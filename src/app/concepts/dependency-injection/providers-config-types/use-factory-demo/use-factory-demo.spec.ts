import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseFactoryDemo } from './use-factory-demo';

describe('UseFactoryDemo', () => {
  let component: UseFactoryDemo;
  let fixture: ComponentFixture<UseFactoryDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseFactoryDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseFactoryDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
