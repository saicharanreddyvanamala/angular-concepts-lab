import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferBasic } from './buffer-basic';

describe('BufferBasic', () => {
  let component: BufferBasic;
  let fixture: ComponentFixture<BufferBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BufferBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BufferBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
