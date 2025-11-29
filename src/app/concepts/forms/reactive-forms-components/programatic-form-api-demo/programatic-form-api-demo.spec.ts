import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaticFormApiDemo } from './programatic-form-api-demo';

describe('ProgramaticFormApiDemo', () => {
  let component: ProgramaticFormApiDemo;
  let fixture: ComponentFixture<ProgramaticFormApiDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramaticFormApiDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaticFormApiDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
