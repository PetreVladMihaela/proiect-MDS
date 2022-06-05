import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../users/main-page/main-page.component';
import { BandProfilesComponent } from './band-profiles/band-profiles.component';

const routes: Routes = [
  {
    path: 'band/:id',
    component: BandProfilesComponent 
  },

  {
    path: 'band',
    redirectTo: 'main'
  },
  
  {
    path: 'main', // http://localhost:4200/main/
    component: MainPageComponent // <- componenta instantiata cand ruta este accesata
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicalBandsRoutingModule { }
