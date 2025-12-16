import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipBasic } from './zip-basic';

describe('ZipBasic', () => {
  let component: ZipBasic;
  let fixture: ComponentFixture<ZipBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZipBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
