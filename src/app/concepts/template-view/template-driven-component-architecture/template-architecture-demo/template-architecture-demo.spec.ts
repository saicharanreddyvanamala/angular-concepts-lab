import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateArchitectureDemo } from './template-architecture-demo';

describe('TemplateArchitectureDemo', () => {
  let component: TemplateArchitectureDemo;
  let fixture: ComponentFixture<TemplateArchitectureDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateArchitectureDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateArchitectureDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
