import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndWithBasic } from './end-with-basic';

describe('EndWithBasic', () => {
  let component: EndWithBasic;
  let fixture: ComponentFixture<EndWithBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndWithBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EndWithBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
