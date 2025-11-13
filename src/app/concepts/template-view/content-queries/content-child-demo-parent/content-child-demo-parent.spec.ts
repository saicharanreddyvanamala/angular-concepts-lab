import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDemoParent } from './content-child-demo-parent';

describe('ContentChildDemoParent', () => {
  let component: ContentChildDemoParent;
  let fixture: ComponentFixture<ContentChildDemoParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildDemoParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildDemoParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
