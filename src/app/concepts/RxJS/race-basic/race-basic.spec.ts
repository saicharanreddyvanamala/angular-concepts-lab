import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceBasic } from './race-basic';

describe('RaceBasic', () => {
  let component: RaceBasic;
  let fixture: ComponentFixture<RaceBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
