import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePipeDemo } from './reactive-pipe-demo';

describe('ReactivePipeDemo', () => {
  let component: ReactivePipeDemo;
  let fixture: ComponentFixture<ReactivePipeDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactivePipeDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivePipeDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
