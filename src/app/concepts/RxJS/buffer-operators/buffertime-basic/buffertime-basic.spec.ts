import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffertimeBasic } from './buffertime-basic';

describe('BuffertimeBasic', () => {
  let component: BuffertimeBasic;
  let fixture: ComponentFixture<BuffertimeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuffertimeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuffertimeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
