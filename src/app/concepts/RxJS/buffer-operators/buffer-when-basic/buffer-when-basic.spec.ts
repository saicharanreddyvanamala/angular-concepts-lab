import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferWhenBasic } from './buffer-when-basic';

describe('BufferWhenBasic', () => {
  let component: BufferWhenBasic;
  let fixture: ComponentFixture<BufferWhenBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BufferWhenBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferWhenBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
