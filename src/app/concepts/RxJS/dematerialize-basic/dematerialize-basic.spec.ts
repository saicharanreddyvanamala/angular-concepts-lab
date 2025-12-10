import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DematerializeBasic } from './dematerialize-basic';

describe('DematerializeBasic', () => {
  let component: DematerializeBasic;
  let fixture: ComponentFixture<DematerializeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DematerializeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DematerializeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
