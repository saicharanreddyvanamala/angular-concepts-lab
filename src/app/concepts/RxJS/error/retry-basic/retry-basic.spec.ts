import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryBasic } from './retry-basic';

describe('RetryBasic', () => {
  let component: RetryBasic;
  let fixture: ComponentFixture<RetryBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetryBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
