import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBasic } from './subject-basic';

describe('SubjectBasic', () => {
  let component: SubjectBasic;
  let fixture: ComponentFixture<SubjectBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
