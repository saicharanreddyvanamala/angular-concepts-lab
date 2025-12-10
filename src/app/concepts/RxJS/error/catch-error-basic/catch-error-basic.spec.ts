import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorBasic } from './catch-error-basic';

describe('CatchErrorBasic', () => {
  let component: CatchErrorBasic;
  let fixture: ComponentFixture<CatchErrorBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchErrorBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchErrorBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
