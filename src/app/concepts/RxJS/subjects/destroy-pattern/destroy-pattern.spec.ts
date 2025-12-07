import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyPattern } from './destroy-pattern';

describe('DestroyPattern', () => {
  let component: DestroyPattern;
  let fixture: ComponentFixture<DestroyPattern>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestroyPattern]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestroyPattern);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
