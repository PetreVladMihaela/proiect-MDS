import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MusicalBand } from 'src/app/interfaces/musical-band';
import { BandHeadquartersService } from 'src/app/services/band-services/band-headquarters.service';
import { MusicalBandsService } from 'src/app/services/band-services/musical-bands.service';

@Component({
  selector: 'app-edit-band',
  templateUrl: './edit-band.component.html',
  styleUrls: ['./edit-band.component.scss']
})
export class EditBandComponent implements OnInit {

  public editGeneralInfo: boolean = true;

  public editBandForm: FormGroup = new FormGroup({
    bandId: new FormControl(0),
    name: new FormControl(''),
    musicGenre: new FormControl(),
    isComplete: new FormControl(false),
    dateFormed: new FormControl(new Date()),
  });

  public headquartersForm: FormGroup = new FormGroup({
    bandId: new FormControl(0),
    country: new FormControl(''),
    city: new FormControl(''),
    address: new FormControl(),
    squareMeters: new FormControl(),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public band: MusicalBand,
    public dialogRef: MatDialogRef<EditBandComponent>,
    private bandsService: MusicalBandsService,
    private headquartesService: BandHeadquartersService
  ) { 
    this.editBandForm.patchValue(this.band);
    if (this.band.hq)
      this.headquartersForm.patchValue(this.band.hq)
  }

  get name(): AbstractControl {
    return this.editBandForm.get('name')!;
  }

  get musicGenre(): AbstractControl {
    return this.editBandForm.get('musicGenre')!;
  }

  get isComplete(): AbstractControl {
    return this.editBandForm.get('isComplete')!;
  }

  get country(): AbstractControl {
    return this.headquartersForm.get('country')!;
  }

  get city(): AbstractControl {
    return this.headquartersForm.get('city')!;
  }

  get address(): AbstractControl {
    return this.headquartersForm.get('address')!;
  }

  get squareMeters(): AbstractControl {
    return this.headquartersForm.get('squareMeters')!;
  }

  public closeDialog(): void { // cand apasam close inchidem fereastra de login
    this.dialogRef.close();
  }

  public saveFormData(): void {
    if (this.editGeneralInfo)
      this.bandsService.updateBandInfo(this.editBandForm.value).subscribe(() => {
        this.dialogRef.close(this.band.bandId);
      });
    else
      if (this.band.hq == null) {
        this.headquartersForm.value.bandId = this.band.bandId;
        this.headquartesService.createBandHQ(this.headquartersForm.value).subscribe(() => {
          this.dialogRef.close(this.band.bandId);
        }); 
      }
      else
        this.headquartesService.updateBandHQ(this.headquartersForm.value).subscribe(() => {
          this.dialogRef.close(this.band.bandId);
        });
  }

  ngOnInit(): void {
  }

  public changeEditForm() {
    if (this.editGeneralInfo == true)
      this.editGeneralInfo = false;
    else 
      this.editGeneralInfo = true;
  }

}
