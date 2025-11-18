import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeDemo } from './async-pipe-demo';

describe('AsyncPipeDemo', () => {
  let component: AsyncPipeDemo;
  let fixture: ComponentFixture<AsyncPipeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncPipeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncPipeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
