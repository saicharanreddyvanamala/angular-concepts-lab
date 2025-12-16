import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryWhenBasic } from './retry-when-basic';

describe('RetryWhenBasic', () => {
  let component: RetryWhenBasic;
  let fixture: ComponentFixture<RetryWhenBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetryWhenBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryWhenBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
