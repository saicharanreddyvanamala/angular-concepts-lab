import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeuntilCancelHttp } from './takeuntil-cancel-http';

describe('TakeuntilCancelHttp', () => {
  let component: TakeuntilCancelHttp;
  let fixture: ComponentFixture<TakeuntilCancelHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeuntilCancelHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeuntilCancelHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
