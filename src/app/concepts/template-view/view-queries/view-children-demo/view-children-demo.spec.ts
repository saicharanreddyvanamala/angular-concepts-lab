import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenDemo } from './view-children-demo';

describe('ViewChildrenDemo', () => {
  let component: ViewChildrenDemo;
  let fixture: ComponentFixture<ViewChildrenDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrenDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildrenDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
