import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForExperimentComponent } from './for-experiment.component';

describe('ForExperimentComponent', () => {
  let component: ForExperimentComponent;
  let fixture: ComponentFixture<ForExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForExperimentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
