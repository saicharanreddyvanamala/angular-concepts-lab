import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithlatestfromBasic } from './withlatestfrom-basic';

describe('WithlatestfromBasic', () => {
  let component: WithlatestfromBasic;
  let fixture: ComponentFixture<WithlatestfromBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithlatestfromBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithlatestfromBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
