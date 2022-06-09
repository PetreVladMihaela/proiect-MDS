import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BandAndUserMatch } from 'src/app/interfaces/band-user-match';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { MusicalBandsService } from 'src/app/services/band-services/musical-bands.service';
import { UserProfilesService } from 'src/app/services/user-services/user-profiles.service';

@Component({
  selector: 'app-band-members-survey',
  templateUrl: './band-members-survey.component.html',
  styleUrls: ['./band-members-survey.component.scss']
})
export class BandMembersSurveyComponent implements OnInit {

  public matchedProfiles: UserProfile[] | undefined = undefined;

  public bandMemberSurveyForm: FormGroup = new FormGroup({
    minAge: new FormControl(0),
    maxAge: new FormControl(100),
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
    @Inject(MAT_DIALOG_DATA) public bandId: number,
    public dialogRef: MatDialogRef<BandMembersSurveyComponent>,
    private userProfilesService: UserProfilesService,
    private bandsService: MusicalBandsService,
    private router: Router
  ) { }

  get minAge(): AbstractControl {
    return this.bandMemberSurveyForm.get('minAge')!;
  }

  get maxAge(): AbstractControl {
    return this.bandMemberSurveyForm.get('maxAge')!;
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

  ngOnInit(): void {
    this.bandsService.getMatchedUserProfiles(this.bandId).subscribe((matchedUserProfiles: UserProfile[]) => {
      if (matchedUserProfiles.length > 0)
        this.matchedProfiles = matchedUserProfiles;
      //console.log(this.matchedProfiles)
    })
  }


  public filterProfiles(profiles: UserProfile[]): UserProfile[] {
    let criteria = this.bandMemberSurveyForm.value

    let result = profiles.filter((profile: UserProfile) => {
      return profile.bandId === null
    });

    let finalResult = result.filter((profile: UserProfile) => {
      if (profile.address?.country && profile.address?.city)
        return profile.address.country.toLowerCase() === criteria.country.toLowerCase()
          && profile.address.city.toLowerCase() === criteria.city.toLowerCase()
      else return
    });

    if (criteria.canSing === true)
      finalResult = finalResult.filter((profile: UserProfile) => {
        return profile.canSing === criteria.canSing
      });
    
    if (criteria.preferredMusicGenre) {
      result = finalResult.filter((profile: UserProfile) => {
        if (profile.playedInstrument) 
          return profile.playedInstrument.toLowerCase() === criteria.playedInstrument.toLowerCase()
        else return
      });
      if (result.length > 0)
        finalResult = result;
    }

    if (criteria.preferredMusicGenre) {
      result = finalResult.filter((profile: UserProfile) => {
        if (profile.preferredMusicGenre) 
          return profile.preferredMusicGenre.toLowerCase() === criteria.preferredMusicGenre.toLowerCase()
        else return
      });
      if (result.length > 0)
        finalResult = result;
    }

    const traits = [criteria.trait1, criteria.trait2]
    let result1 = finalResult.filter((profile: UserProfile) => {
      return traits.indexOf(profile.trait1) > -1;
    });
    let result2 = finalResult.filter((profile: UserProfile) => {
      return traits.indexOf(profile.trait2) > -1;
    });
    let results = result1.concat(result2.filter((item) => result1.indexOf(item) < 0))
    if (results.length > 0)
      finalResult = results;

    if (criteria.minAge == null)
      criteria.minAge = 0;
    if (criteria.maxAge == null)
      criteria.maxAge = 100;
    if (criteria.minAge > 0 || criteria.maxAge < 100) {
      result = finalResult.filter((profile: UserProfile) => {
        if (profile.age == null)
          profile.age = 0
        return profile.age >= criteria.minAge && profile.age <= criteria.maxAge;
      });
      if (result.length > 0)
        finalResult = result;
    }

    if (criteria.occupation) {
      result = finalResult.filter((profile: UserProfile) => {
        if (profile.occupation) 
          return profile.occupation.toLowerCase() === criteria.occupation.toLowerCase();
        else return
      });
      if (result.length > 0)
        finalResult = result;
    }

    return finalResult
  }

  
  public completeSurvey(): void {
    this.userProfilesService.getAllUserProfiles().subscribe((userProfiles: UserProfile[]) => {
      this.matchedProfiles = this.filterProfiles(userProfiles);
      //console.log(this.matchedProfiles)
      let matches: BandAndUserMatch[] = [];
      for (let profile of this.matchedProfiles) {
        let match: BandAndUserMatch = { 
          bandId: this.bandId,
          userId: profile.userId,
          type: "survey match"
        }
        matches.push(match);
        profile.bandAndUserMatches = [match]
      }
      //console.log(matches)
      this.bandsService.saveBandAndUserMatches(matches).subscribe();
    });
  }

  public retakeSurvey(): void {
    this.bandsService.deleteBandAndUserMatches(this.bandId).subscribe();
    this.matchedProfiles = undefined
  }

  public goToUserProfile(username: string): void {
    if (this.matchedProfiles) {
      this.router.navigate(['/user', username]);
      this.dialogRef.close();
    }
  }

  public sendInvitation(profile: UserProfile): void {
    let user: string
    if (profile.firstName && profile.lastName)
      user = profile.firstName+" "+profile.lastName
    else
      user = profile.owner.username
    if (window.confirm("Send "+user+" an invitation to join your band?")) {
      let invitation: BandAndUserMatch = {
        bandId: this.bandId,
        userId: profile.userId,
        type: "invitation"
      }
      this.bandsService.updateBandAndUserMatch(invitation).subscribe();
      if (profile.bandAndUserMatches)
        profile.bandAndUserMatches[0].type = 'invitation';
    }
  }
  
}
