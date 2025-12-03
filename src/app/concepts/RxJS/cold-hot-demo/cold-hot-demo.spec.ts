import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdHotDemo } from './cold-hot-demo';

describe('ColdHotDemo', () => {
  let component: ColdHotDemo;
  let fixture: ComponentFixture<ColdHotDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColdHotDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColdHotDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
