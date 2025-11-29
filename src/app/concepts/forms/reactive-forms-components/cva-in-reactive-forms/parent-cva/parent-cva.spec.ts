import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCva } from './parent-cva';

describe('ParentCva', () => {
  let component: ParentCva;
  let fixture: ComponentFixture<ParentCva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCva]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCva);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
