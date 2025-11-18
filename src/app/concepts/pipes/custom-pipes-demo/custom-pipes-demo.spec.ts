import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesDemo } from './custom-pipes-demo';

describe('CustomPipesDemo', () => {
  let component: CustomPipesDemo;
  let fixture: ComponentFixture<CustomPipesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPipesDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPipesDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
