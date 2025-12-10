import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuffertoggleBasic } from './buffertoggle-basic';

describe('BuffertoggleBasic', () => {
  let component: BuffertoggleBasic;
  let fixture: ComponentFixture<BuffertoggleBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuffertoggleBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuffertoggleBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
