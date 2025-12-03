import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncAsyncBasic } from './sync-async-basic';

describe('SyncAsyncBasic', () => {
  let component: SyncAsyncBasic;
  let fixture: ComponentFixture<SyncAsyncBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SyncAsyncBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SyncAsyncBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
