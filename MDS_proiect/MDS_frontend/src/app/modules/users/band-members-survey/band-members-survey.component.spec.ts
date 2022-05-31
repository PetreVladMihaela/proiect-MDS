import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMembersSurveyComponent } from './band-members-survey.component';

describe('BandMembersSurveyComponent', () => {
  let component: BandMembersSurveyComponent;
  let fixture: ComponentFixture<BandMembersSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandMembersSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandMembersSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
