import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersInjectorHeirarchyParentDemo } from './providers-injector-heirarchy-parent-demo';

describe('ProvidersInjectorHeirarchyParentDemo', () => {
  let component: ProvidersInjectorHeirarchyParentDemo;
  let fixture: ComponentFixture<ProvidersInjectorHeirarchyParentDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersInjectorHeirarchyParentDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersInjectorHeirarchyParentDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
