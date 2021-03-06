import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { MusicalBandsService } from 'src/app/services/band-services/musical-bands.service';
import { UserProfilesService } from 'src/app/services/user-services/user-profiles.service';

@Component({
  selector: 'app-create-band',
  templateUrl: './create-band.component.html',
  styleUrls: ['./create-band.component.scss']
})
export class CreateBandComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public profile: UserProfile,
    public dialogRef: MatDialogRef<CreateBandComponent>,
    private bandsService: MusicalBandsService,
    private profilesService: UserProfilesService,
    private router: Router
  ) { }

  public createBandForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    musicGenre: new FormControl(''),
    dateFormed: new FormControl(new Date()),
    complete: new FormControl(false)
  });

  get name(): AbstractControl {
    return this.createBandForm.get('name')!;
  }

  get musicGenre(): AbstractControl {
    return this.createBandForm.get('musicGenre')!;
  }

  public closeDialog(): void { // cand apasam close inchidem fereastra de login
    this.dialogRef.close();
  }

  public saveBand(): void {
    this.profilesService.deleteUserMatches(this.profile.userId).subscribe();
    this.bandsService.createBand(this.createBandForm.value).subscribe((bandId: number) => {
      this.profilesService.addBandToUserProfile(this.profile.owner.email, bandId).subscribe(() => {
        this.dialogRef.close();
        this.router.navigate(['/band', bandId]);
      });
    });
  }

  ngOnInit(): void {
  }

}
