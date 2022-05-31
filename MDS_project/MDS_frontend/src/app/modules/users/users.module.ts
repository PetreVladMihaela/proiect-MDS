import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicalBandsComponent } from './musical-bands/musical-bands.component';
import { BandMembersSurveyComponent } from './band-members-survey/band-members-survey.component';
import { CreateBandComponent } from './create-band/create-band.component';
import { AccountInfoComponent } from './account-info/account-info.component';


@NgModule({
  declarations: [
    UserProfilesComponent,
    MainPageComponent,
    EditUserProfileComponent,
    MusicalBandsComponent,
    BandMembersSurveyComponent,
    CreateBandComponent,
    AccountInfoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
