import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeBasic } from './finalize-basic';

describe('FinalizeBasic', () => {
  let component: FinalizeBasic;
  let fixture: ComponentFixture<FinalizeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalizeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalizeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
