import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleBasic } from './sample-basic';

describe('SampleBasic', () => {
  let component: SampleBasic;
  let fixture: ComponentFixture<SampleBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
