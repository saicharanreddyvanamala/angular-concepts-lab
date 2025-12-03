import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustMapBasic } from './exhaust-map-basic';

describe('ExhaustMapBasic', () => {
  let component: ExhaustMapBasic;
  let fixture: ComponentFixture<ExhaustMapBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaustMapBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustMapBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
