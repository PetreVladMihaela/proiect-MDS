import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { BandAndUserMatch } from 'src/app/interfaces/band-user-match';
import { MusicalBand } from 'src/app/interfaces/musical-band';
import { User } from 'src/app/interfaces/user';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { MusicalBandsService } from 'src/app/services/band-services/musical-bands.service';
import { UserProfilesService } from 'src/app/services/user-services/user-profiles.service';
import { CreateBandComponent } from '../../musical-bands/create-band/create-band.component';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription;

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
    bandId: 0, name: '',
    dateFormed: new Date(),
    isComplete: false
  }

  public bandsInvitedToJoin: MusicalBand[] = []
  public showInvitations: boolean = false;

  constructor(
    private profilesService: UserProfilesService,
    private bandsService: MusicalBandsService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.user.username = params['username'];
      this.getUserProfile();
    });
  }

  public getUserProfile(): void {
    this.profilesService.getUserProfileByUsername(this.user.username).subscribe((profile: UserProfile) => {
      if(profile) {
        this.userProfile = profile
        this.user = profile.owner

        let currentUser = localStorage.getItem('User');
        let currentPassword = localStorage.getItem('Password');
        if(currentUser && currentPassword)
          if (currentUser == this.user.username && currentPassword == this.user.password) {
            this.canEdit = true; 
            this.profilesService.getBandsInvitedToJoin(profile.userId).subscribe((bands: MusicalBand[]) => {
              this.bandsInvitedToJoin = bands
            })
          }

        if(profile.bandId) {
          this.bandsService.getBandById(profile.bandId).subscribe((band: MusicalBand) => {
            this.musicalBand = band
          })
        }
      }
    });
  }

  public editUserProfile(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '550px';
    dialogConfig.height = '600px';
    dialogConfig.disableClose = true;
    dialogConfig.data = this.userProfile;
    const dialogRef = this.dialog.open(EditUserProfileComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getUserProfile();
    });
  }

  public createBand(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '450px';
    dialogConfig.height = '400px';
    dialogConfig.disableClose = true;
    dialogConfig.data = this.userProfile;
    this.dialog.open(CreateBandComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((bandId: number) => {
    //   if (bandId) {
    //     this.bandsService.getBandById(bandId).subscribe((band: MusicalBand) => {
    //       this.musicalBand = band
    //     })
    //   }
    // });
  }

  public goToAccountInfo(): void {
    this.router.navigate(['/account-info', this.user.username]);
  }

  public logout(): void {
    localStorage.removeItem('User');
    localStorage.removeItem('Password');
    this.router.navigate(['/auth']);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public displayInvitations(): void {
    this.showInvitations = !this.showInvitations
  }

  public declineInvitation(band: MusicalBand): void {
    if (window.confirm("Decline the invitation to join "+band.name+"?")) {
      let invite = band.bandAndUserMatches
      if (invite) {
        invite[0].type = "declined invitation";
        this.bandsService.updateBandAndUserMatch(invite[0]).subscribe(() => {
          window.location.reload();
        });
      }
    }
  }

  public acceptInvitation(bandToJoin: MusicalBand): void {
    if (window.confirm("Accept the invitation to join "+bandToJoin.name+"?")) {
      let declined: BandAndUserMatch[] = [];
      for (let band of this.bandsInvitedToJoin) {
        let invite = band.bandAndUserMatches;
        if (invite && invite[0].bandId != bandToJoin.bandId) {
          invite[0].type = "declined invitation";
          declined.push(invite[0]);
        }
      }
      this.bandsService.updateBandAndUserMatches(declined).subscribe();
      this.bandsService.deleteBandAndUserMatch(bandToJoin.bandId, this.userProfile.userId).subscribe();
      this.profilesService.addBandToUserProfile(this.userProfile.owner.email, bandToJoin.bandId).subscribe(() => {
        this.router.navigate(['/band', bandToJoin.bandId]);
      });
    }
  }

}
