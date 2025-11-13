import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContainerRefDemo } from './view-container-ref-demo';

describe('ViewContainerRefDemo', () => {
  let component: ViewContainerRefDemo;
  let fixture: ComponentFixture<ViewContainerRefDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewContainerRefDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewContainerRefDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
