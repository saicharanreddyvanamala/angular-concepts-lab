import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammaticAccessToTdf } from './programmatic-access-to-tdf';

describe('ProgrammaticAccessToTdf', () => {
  let component: ProgrammaticAccessToTdf;
  let fixture: ComponentFixture<ProgrammaticAccessToTdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammaticAccessToTdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammaticAccessToTdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
