import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForkjoinBasic } from './forkjoin-basic';

describe('ForkjoinBasic', () => {
  let component: ForkjoinBasic;
  let fixture: ComponentFixture<ForkjoinBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForkjoinBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForkjoinBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
