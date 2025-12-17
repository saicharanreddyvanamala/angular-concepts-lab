import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpFileDownloadDemo } from './http-file-download-demo';

describe('HttpFileDownloadDemo', () => {
  let component: HttpFileDownloadDemo;
  let fixture: ComponentFixture<HttpFileDownloadDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpFileDownloadDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpFileDownloadDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
