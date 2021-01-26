import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallangeCodingProfilesComponent } from './challange-coding-profiles.component';

describe('ChallangeCodingProfilesComponent', () => {
  let component: ChallangeCodingProfilesComponent;
  let fixture: ComponentFixture<ChallangeCodingProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallangeCodingProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallangeCodingProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
