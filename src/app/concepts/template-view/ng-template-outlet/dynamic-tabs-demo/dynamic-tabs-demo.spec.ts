import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTabsDemo } from './dynamic-tabs-demo';

describe('DynamicTabsDemo', () => {
  let component: DynamicTabsDemo;
  let fixture: ComponentFixture<DynamicTabsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicTabsDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTabsDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
