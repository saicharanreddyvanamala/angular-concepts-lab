import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDeactivateDemo } from './can-deactivate-demo';

describe('CanDeactivateDemo', () => {
  let component: CanDeactivateDemo;
  let fixture: ComponentFixture<CanDeactivateDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanDeactivateDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanDeactivateDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
