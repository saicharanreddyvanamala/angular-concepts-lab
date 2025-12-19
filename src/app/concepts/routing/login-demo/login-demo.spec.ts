import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDemo } from './login-demo';

describe('LoginDemo', () => {
  let component: LoginDemo;
  let fixture: ComponentFixture<LoginDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
