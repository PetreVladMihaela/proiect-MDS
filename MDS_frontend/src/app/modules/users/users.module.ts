import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserProfilesComponent,
    MainPageComponent,
    EditUserProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
