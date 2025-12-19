import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleOrderDemo } from './lifecycle-order-demo';

describe('LifecycleOrderDemo', () => {
  let component: LifecycleOrderDemo;
  let fixture: ComponentFixture<LifecycleOrderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifecycleOrderDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleOrderDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
