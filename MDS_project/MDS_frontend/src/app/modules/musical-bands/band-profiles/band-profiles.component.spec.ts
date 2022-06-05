import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandProfilesComponent } from './band-profiles.component';

describe('BandProfilesComponent', () => {
  let component: BandProfilesComponent;
  let fixture: ComponentFixture<BandProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
