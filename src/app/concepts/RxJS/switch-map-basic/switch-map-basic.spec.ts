import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapBasic } from './switch-map-basic';

describe('SwitchMapBasic', () => {
  let component: SwitchMapBasic;
  let fixture: ComponentFixture<SwitchMapBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMapBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMapBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
