import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipBasic } from './skip-basic';

describe('SkipBasic', () => {
  let component: SkipBasic;
  let fixture: ComponentFixture<SkipBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkipBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkipBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
