import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContextDemo } from './template-context-demo';

describe('TemplateContextDemo', () => {
  let component: TemplateContextDemo;
  let fixture: ComponentFixture<TemplateContextDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateContextDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateContextDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
