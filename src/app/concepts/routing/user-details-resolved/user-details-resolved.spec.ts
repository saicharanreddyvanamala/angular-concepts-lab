import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsResolved } from './user-details-resolved';

describe('UserDetailsResolved', () => {
  let component: UserDetailsResolved;
  let fixture: ComponentFixture<UserDetailsResolved>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailsResolved]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsResolved);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
