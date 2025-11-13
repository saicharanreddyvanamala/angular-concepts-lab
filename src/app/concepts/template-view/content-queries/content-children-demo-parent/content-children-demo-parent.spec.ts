import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildrenDemoParent } from './content-children-demo-parent';

describe('ContentChildrenDemoParent', () => {
  let component: ContentChildrenDemoParent;
  let fixture: ComponentFixture<ContentChildrenDemoParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildrenDemoParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildrenDemoParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
