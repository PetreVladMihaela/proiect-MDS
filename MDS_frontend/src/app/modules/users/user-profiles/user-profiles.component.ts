import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/interfaces/user';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { UserProfilesService } from 'src/app/services/user-profiles.service';

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
    private route: ActivatedRoute
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

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
