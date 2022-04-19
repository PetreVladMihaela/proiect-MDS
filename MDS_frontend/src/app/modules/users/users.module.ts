import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    UserProfilesComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
