import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';

const routes: Routes = [
  {
    path: '', // calea initiala -> http://localhost:4200/
    redirectTo: 'user' // cand accesam aceasta cale, suntem redirectionati automat catre http://localhost:4200/user 
                       //                                                                (calea de mai jos)
  },

  {
    path: 'user', // http://localhost:4200/user
    component: UserProfilesComponent // <- componenta instantiata cand ruta este accesata
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
