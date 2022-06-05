import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicalBandsRoutingModule } from './musical-bands-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BandProfilesComponent } from './band-profiles/band-profiles.component';
import { BandMembersSurveyComponent } from './band-members-survey/band-members-survey.component';
import { CreateBandComponent } from './create-band/create-band.component';
import { EditBandComponent } from './edit-band/edit-band.component';


@NgModule({
  declarations: [
    BandProfilesComponent,
    BandMembersSurveyComponent,
    CreateBandComponent,
    EditBandComponent
  ],
  imports: [
    CommonModule,
    MusicalBandsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class MusicalBandsModule { }
