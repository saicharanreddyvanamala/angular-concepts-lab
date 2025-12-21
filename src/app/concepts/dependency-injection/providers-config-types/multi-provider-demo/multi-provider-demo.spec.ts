import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiProviderDemo } from './multi-provider-demo';

describe('MultiProviderDemo', () => {
  let component: MultiProviderDemo;
  let fixture: ComponentFixture<MultiProviderDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiProviderDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiProviderDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
