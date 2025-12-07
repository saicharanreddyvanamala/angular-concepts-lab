import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplayBasic } from './share-replay-basic';

describe('ShareReplayBasic', () => {
  let component: ShareReplayBasic;
  let fixture: ComponentFixture<ShareReplayBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareReplayBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareReplayBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
