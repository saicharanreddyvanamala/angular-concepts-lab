import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseExistingDemo } from './use-existing-demo';

describe('UseExistingDemo', () => {
  let component: UseExistingDemo;
  let fixture: ComponentFixture<UseExistingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseExistingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseExistingDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
