import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipesDemo } from './built-in-pipes-demo';

describe('BuiltInPipesDemo', () => {
  let component: BuiltInPipesDemo;
  let fixture: ComponentFixture<BuiltInPipesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInPipesDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInPipesDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
