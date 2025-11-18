import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAndKeyValuePipesDemo } from './json-and-key-value-pipes-demo';

describe('JsonAndKeyValuePipesDemo', () => {
  let component: JsonAndKeyValuePipesDemo;
  let fixture: ComponentFixture<JsonAndKeyValuePipesDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonAndKeyValuePipesDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAndKeyValuePipesDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
