import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-band-members-survey',
  templateUrl: './band-members-survey.component.html',
  styleUrls: ['./band-members-survey.component.scss']
})
export class BandMembersSurveyComponent implements OnInit {

  public bandMemberSurveyForm: FormGroup = new FormGroup({
    age: new FormControl(0),
    occupation: new FormControl(''),
    canSing: new FormControl(false),
    playedInstrument: new FormControl(''),
    preferredMusicGenre: new FormControl(''),
    trait1: new FormControl(''),
    trait2: new FormControl(''),
    country: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl('')
  });

  public traits: string[] = ["Analytical", "Charismatic", "Confident", "Creative", "Friendly", "Hard-working",
                              "Ingenious", "Level-headed", "Observant", "Organized"];

  constructor(
    public dialogRef: MatDialogRef<BandMembersSurveyComponent>,
  ) { }

  get age(): AbstractControl {
    return this.bandMemberSurveyForm.get('age')!;
  }

  get occupation(): AbstractControl {
    return this.bandMemberSurveyForm.get('occupation')!;
  }

  get canSing(): AbstractControl {
    return this.bandMemberSurveyForm.get('canSing')!;
  }

  get playedInstrument(): AbstractControl {
    return this.bandMemberSurveyForm.get('playedInstrument')!;
  }

  get preferredMusicGenre(): AbstractControl {
    return this.bandMemberSurveyForm.get('preferredMusicGenre')!;
  }

  get trait1(): AbstractControl {
    return this.bandMemberSurveyForm.get('trait1')!;
  }

  get trait2(): AbstractControl {
    return this.bandMemberSurveyForm.get('trait2')!;
  }

  get country(): AbstractControl {
    return this.bandMemberSurveyForm.get('country')!;
  }

  get city(): AbstractControl {
    return this.bandMemberSurveyForm.get('city')!;
  }

  get street(): AbstractControl {
    return this.bandMemberSurveyForm.get('street')!;
  }

  public closeDialog(): void { // cand apasam close inchidem fereastra de login
    this.dialogRef.close();
  }

  public completeSurvey(): void {
    console.log(this.bandMemberSurveyForm.value)
  }

  ngOnInit(): void {
  }

}
