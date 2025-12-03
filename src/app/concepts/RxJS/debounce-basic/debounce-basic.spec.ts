import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceBasic } from './debounce-basic';

describe('DebounceBasic', () => {
  let component: DebounceBasic;
  let fixture: ComponentFixture<DebounceBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
