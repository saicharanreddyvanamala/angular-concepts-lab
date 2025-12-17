import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFileUploadDemo } from './http-file-upload-demo';

describe('HttpFileUploadDemo', () => {
  let component: HttpFileUploadDemo;
  let fixture: ComponentFixture<HttpFileUploadDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpFileUploadDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpFileUploadDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
