import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSubjectBasic } from './async-subject-basic';

describe('AsyncSubjectBasic', () => {
  let component: AsyncSubjectBasic;
  let fixture: ComponentFixture<AsyncSubjectBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncSubjectBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncSubjectBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
