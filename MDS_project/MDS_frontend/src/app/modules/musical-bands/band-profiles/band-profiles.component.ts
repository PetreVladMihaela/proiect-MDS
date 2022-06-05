import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MusicalBand } from 'src/app/interfaces/musical-band';
import { MusicalBandsService } from 'src/app/services/band-services/musical-bands.service';
import { BandMembersSurveyComponent } from '../band-members-survey/band-members-survey.component';
import { EditBandComponent } from '../edit-band/edit-band.component';

@Component({
  selector: 'app-band-profiles',
  templateUrl: './band-profiles.component.html',
  styleUrls: ['./band-profiles.component.scss']
})
export class BandProfilesComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription;

  public musicalBand: MusicalBand = {
    bandId: 0, name: '',
    dateFormed: new Date(),
    isComplete: false
  }

  public canEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private bandsService: MusicalBandsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.getMusicalBand(params['id']);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getMusicalBand(id: number): void {
    this.bandsService.getBandById(id).subscribe((band: MusicalBand) => {
      if(band) {
        this.musicalBand = band
        //console.log(this.musicalBand)
        let currentUser = localStorage.getItem('User');
        let currentPassword = localStorage.getItem('Password');
        if (band.members)
          for (const member of band.members)
            if (member.owner.username == currentUser && member.owner.password == currentPassword) {
              this.canEdit = true
              break
            }
      }
    });
  }

  public editBand(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '550px';
    dialogConfig.height = '590px';
    dialogConfig.disableClose = true; // nu se mai inchide dialogul daca dam clic in afara
    dialogConfig.data = this.musicalBand;
    const dialogRef = this.dialog.open(EditBandComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(bandId => {
      if (bandId)
        this.getMusicalBand(bandId);
    });
  }

  public takeSurvey(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '350px';
    dialogConfig.maxWidth = '500px';
    dialogConfig.height = '600px';
    dialogConfig.disableClose = true; // nu se mai inchide dialogul daca dam clic in afara
    const dialogRef = this.dialog.open(BandMembersSurveyComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(() => {
    // });
  }

}
