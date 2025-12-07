import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartWithBasic } from './start-with-basic';

describe('StartWithBasic', () => {
  let component: StartWithBasic;
  let fixture: ComponentFixture<StartWithBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartWithBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartWithBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
