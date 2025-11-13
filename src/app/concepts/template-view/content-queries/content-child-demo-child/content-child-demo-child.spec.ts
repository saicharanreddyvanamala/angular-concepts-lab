import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChildDemoChild } from './content-child-demo-child';

describe('ContentChildDemoChild', () => {
  let component: ContentChildDemoChild;
  let fixture: ComponentFixture<ContentChildDemoChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChildDemoChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChildDemoChild);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
