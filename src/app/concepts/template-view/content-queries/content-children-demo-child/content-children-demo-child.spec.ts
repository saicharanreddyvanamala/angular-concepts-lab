import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildrenDemoChild } from './content-children-demo-child';

describe('ContentChildrenDemoChild', () => {
  let component: ContentChildrenDemoChild;
  let fixture: ComponentFixture<ContentChildrenDemoChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildrenDemoChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildrenDemoChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
