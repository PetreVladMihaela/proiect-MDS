import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { UserAddressesService } from 'src/app/services/user-addresses.service';
import { UserProfilesService } from 'src/app/services/user-profiles.service';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {

  public editUserProfileForm: FormGroup = new FormGroup({
    firstName: new FormControl('Generic'),
    lastName: new FormControl('User'),
    phone: new FormControl('', [Validators.minLength(10), Validators.maxLength(20)]),
    age: new FormControl(0),
    occupation: new FormControl(''),
    canSing: new FormControl(false),
    playedInstrument: new FormControl(''),
    preferredMusicGenre: new FormControl(''),
    trait1: new FormControl(''),
    trait2: new FormControl('')
  });

  public traits: string[] = ["Analytical", "Charismatic", "Confident", "Creative", "Friendly", "Hard-working",
                              "Ingenious", "Level-headed", "Observant", "Organized"];

  public addressForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    country: new FormControl(''),
    city: new FormControl(''),
    street: new FormControl(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserProfile,
    public dialogRef: MatDialogRef<EditUserProfileComponent>,
    private profilesService: UserProfilesService,
    private addressesService: UserAddressesService
  ) {
    //console.log(data)
    this.editUserProfileForm.patchValue(this.data);
    this.addressForm.patchValue(this.data.address!)
  }

  get firstName(): AbstractControl {
    return this.editUserProfileForm.get('firstName')!;
  }

  get lastName(): AbstractControl {
    return this.editUserProfileForm.get('lastName')!;
  }

  get phone(): AbstractControl {
    return this.editUserProfileForm.get('phone')!;
  }

  get age(): AbstractControl {
    return this.editUserProfileForm.get('age')!;
  }

  get occupation(): AbstractControl {
    return this.editUserProfileForm.get('occupation')!;
  }

  get canSing(): AbstractControl {
    return this.editUserProfileForm.get('canSing')!;
  }

  get playedInstrument(): AbstractControl {
    return this.editUserProfileForm.get('playedInstrument')!;
  }

  get preferredMusicGenre(): AbstractControl {
    return this.editUserProfileForm.get('preferredMusicGenre')!;
  }

  get trait1(): AbstractControl {
    return this.editUserProfileForm.get('trait1')!;
  }

  get trait2(): AbstractControl {
    return this.editUserProfileForm.get('trait2')!;
  }

  get country(): AbstractControl {
    return this.addressForm.get('country')!;
  }

  get city(): AbstractControl {
    return this.addressForm.get('city')!;
  }

  get street(): AbstractControl {
    return this.addressForm.get('street')!;
  }

  ngOnInit(): void {
  }

  public closeDialog(): void { // cand apasam close inchidem fereastra de login
    this.dialogRef.close();
  }

  public saveFormData(): void {
    let userProfile = this.editUserProfileForm.value;
    userProfile.owner = this.data.owner;
    this.profilesService.editUserProfile(this.editUserProfileForm.value).subscribe(() => {
      this.addressesService.editUserAddress(this.addressForm.value).subscribe(() => {
        this.dialogRef.close();
      });
    });
  }

}
