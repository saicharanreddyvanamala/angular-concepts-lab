import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersInjectorHeirarchyChildDemo } from './providers-injector-heirarchy-child-demo';

describe('ProvidersInjectorHeirarchyChildDemo', () => {
  let component: ProvidersInjectorHeirarchyChildDemo;
  let fixture: ComponentFixture<ProvidersInjectorHeirarchyChildDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersInjectorHeirarchyChildDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvidersInjectorHeirarchyChildDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
