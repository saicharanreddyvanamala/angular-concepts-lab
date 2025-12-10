import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeBasic } from './materialize-basic';

describe('MaterializeBasic', () => {
  let component: MaterializeBasic;
  let fixture: ComponentFixture<MaterializeBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterializeBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterializeBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
