import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroups } from './nested-form-groups';

describe('NestedFormGroups', () => {
  let component: NestedFormGroups;
  let fixture: ComponentFixture<NestedFormGroups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedFormGroups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedFormGroups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
