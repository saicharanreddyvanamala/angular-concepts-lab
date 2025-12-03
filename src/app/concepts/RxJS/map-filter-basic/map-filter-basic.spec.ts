import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFilterBasic } from './map-filter-basic';

describe('MapFilterBasic', () => {
  let component: MapFilterBasic;
  let fixture: ComponentFixture<MapFilterBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapFilterBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapFilterBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
