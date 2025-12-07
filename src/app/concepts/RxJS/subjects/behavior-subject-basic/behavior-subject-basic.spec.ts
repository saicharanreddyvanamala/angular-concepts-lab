import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorSubjectBasic } from './behavior-subject-basic';

describe('BehaviorSubjectBasic', () => {
  let component: BehaviorSubjectBasic;
  let fixture: ComponentFixture<BehaviorSubjectBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorSubjectBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorSubjectBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
