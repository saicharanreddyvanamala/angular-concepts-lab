import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLatestWithBasic } from './combine-latest-with-basic';

describe('CombineLatestWithBasic', () => {
  let component: CombineLatestWithBasic;
  let fixture: ComponentFixture<CombineLatestWithBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombineLatestWithBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLatestWithBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
