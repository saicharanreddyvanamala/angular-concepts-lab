import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerDemo } from './ng-container-demo';

describe('NgContainerDemo', () => {
  let component: NgContainerDemo;
  let fixture: ComponentFixture<NgContainerDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainerDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainerDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
