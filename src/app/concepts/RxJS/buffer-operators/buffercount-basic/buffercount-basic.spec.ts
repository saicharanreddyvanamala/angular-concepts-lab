import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffercountBasic } from './buffercount-basic';

describe('BuffercountBasic', () => {
  let component: BuffercountBasic;
  let fixture: ComponentFixture<BuffercountBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuffercountBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuffercountBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
