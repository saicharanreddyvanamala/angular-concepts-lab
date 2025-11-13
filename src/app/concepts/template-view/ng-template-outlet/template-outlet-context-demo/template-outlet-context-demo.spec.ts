import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateOutletContextDemo } from './template-outlet-context-demo';

describe('TemplateOutletContextDemo', () => {
  let component: TemplateOutletContextDemo;
  let fixture: ComponentFixture<TemplateOutletContextDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateOutletContextDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateOutletContextDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
