import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalBandsComponent } from './musical-bands.component';

describe('MusicalBandsComponent', () => {
  let component: MusicalBandsComponent;
  let fixture: ComponentFixture<MusicalBandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalBandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalBandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
