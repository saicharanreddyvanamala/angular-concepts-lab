import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipUntilBasic } from './skip-until-basic';

describe('SkipUntilBasic', () => {
  let component: SkipUntilBasic;
  let fixture: ComponentFixture<SkipUntilBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipUntilBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipUntilBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
