import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    UserProfilesComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule
  ]
})
export class UsersModule { }
