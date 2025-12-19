import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCdDemo } from './default-cd-demo';

describe('DefaultCdDemo', () => {
  let component: DefaultCdDemo;
  let fixture: ComponentFixture<DefaultCdDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCdDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultCdDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
