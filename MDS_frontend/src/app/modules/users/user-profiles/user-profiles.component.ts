import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/interfaces/user';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { UserProfilesService } from 'src/app/services/user-profiles.service';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.scss']
})
export class UserProfilesComponent implements OnInit, OnDestroy {

  private sub: Subscription = new Subscription;

  public user: User = {
    email: "",
    password: "",
    username: ""
  }
  public userProfile: UserProfile = {
    email: "",
    owner: this.user
  }

  public canEdit: boolean = false

  constructor(
    private profilesService: UserProfilesService,
    private route: ActivatedRoute,
    private dialog: MatDialog
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
        //console.log(this.canEdit)
      }
      //console.log(this.userProfile);
    });
  }

  public editUserProfile(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '50%';
    dialogConfig.minWidth = '300px';
    dialogConfig.maxWidth = '550px';
    dialogConfig.height = '550px';
    dialogConfig.disableClose = true; // nu se mai inchide dialogul daca dam clic in afara
    dialogConfig.data = this.userProfile;
    const dialogRef = this.dialog.open(EditUserProfileComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.getUserProfile();
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
