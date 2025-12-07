import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplaySubjectBasic } from './replay-subject-basic';

describe('ReplaySubjectBasic', () => {
  let component: ReplaySubjectBasic;
  let fixture: ComponentFixture<ReplaySubjectBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplaySubjectBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReplaySubjectBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
