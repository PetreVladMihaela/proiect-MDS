import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MusicalBand } from 'src/app/interfaces/musical-band';
import { MusicalBandsService } from 'src/app/services/musical-bands.service';
import { BandMembersSurveyComponent } from '../band-members-survey/band-members-survey.component';
import { BandHQ } from 'src/app/interfaces/band-hq';

@Component({
  selector: 'app-musical-bands',
  templateUrl: './musical-bands.component.html',
  styleUrls: ['./musical-bands.component.scss']
})
export class MusicalBandsComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription;

  public musicalBand: MusicalBand = {
    bandId: 0,
    name: ''
  }

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

  public getMusicalBand(id: number): void {
    this.bandsService.getBandById(id).subscribe((band: MusicalBand) => {
      if(band) {
        this.musicalBand = band
        //console.log(this.musicalBand)
      }
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

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
