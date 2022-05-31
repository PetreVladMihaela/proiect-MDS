import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MusicalBand } from 'src/app/interfaces/musical-band';
import { User } from 'src/app/interfaces/user';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { MusicalBandsService } from 'src/app/services/musical-bands.service';
import { UserProfilesService } from 'src/app/services/user-profiles.service';
import { CreateBandComponent } from '../create-band/create-band.component';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription;

  public user: User = {
    userId: 0,
    email: "",
    password: "",
    username: ""
  }
  public userProfile: UserProfile = {
    userId: 0,
    owner: this.user
  }

  public canEdit: boolean = false;

  public musicalBand: MusicalBand = {
    bandId: 0,
    name: ''
  }

  constructor(
    private profilesService: UserProfilesService,
    private bandsService: MusicalBandsService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.user.username = params['username'];
      //console.log(this.userProfile.email);
      if (this.user.username) {
        this.getUserProfile();
      }
    });
  }

  public getUserProfile(): void {
    this.profilesService.getUserProfileByUsername(this.user.username).subscribe((profile: UserProfile) => {
      if(profile) {
        this.userProfile = profile
        this.user = profile.owner

        let currentUser = localStorage.getItem('User');
        if(currentUser) { this.canEdit = currentUser === this.user.password; }

        if(profile.bandId) {
          this.bandsService.getBandById(profile.bandId).subscribe((band: MusicalBand) => {
            this.musicalBand = band
          })
        }
        //console.log(this.canEdit)
      }
    });
  }

  public editUserProfile(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '550px';
    dialogConfig.height = '600px';
    dialogConfig.disableClose = true; // nu se mai inchide dialogul daca dam clic in afara
    dialogConfig.data = this.userProfile;
    const dialogRef = this.dialog.open(EditUserProfileComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getUserProfile();
    });
  }

  public createBand() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '450px';
    dialogConfig.height = '400px';
    dialogConfig.disableClose = true; // nu se mai inchide dialogul daca dam clic in afara
    dialogConfig.data = this.userProfile;
    const dialogRef = this.dialog.open(CreateBandComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((bandId: number) => {
      if (bandId)
        this.bandsService.getBandById(bandId).subscribe((band: MusicalBand) => {
          this.musicalBand = band
        })
    });
  }

  public goToAccountInfo() {
    this.router.navigate(['/account-info', this.user.username]);
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
