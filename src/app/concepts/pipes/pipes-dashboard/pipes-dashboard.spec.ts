import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDashboard } from './pipes-dashboard';

describe('PipesDashboard', () => {
  let component: PipesDashboard;
  let fixture: ComponentFixture<PipesDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
