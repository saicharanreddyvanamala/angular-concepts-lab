import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrowErrorBasic } from './throw-error-basic';

describe('ThrowErrorBasic', () => {
  let component: ThrowErrorBasic;
  let fixture: ComponentFixture<ThrowErrorBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThrowErrorBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThrowErrorBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
