import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountInfoComponent } from './account-info/account-info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';

const routes: Routes = [
  {
    path: '', // calea initiala -> http://localhost:4200/
    redirectTo: 'main' // cand accesam aceasta cale, suntem redirectionati automat catre http://localhost:4200/auth 
  },

  {
    path: 'main', // http://localhost:4200/main/
    component: MainPageComponent // <- componenta instantiata cand ruta este accesata
  },

  {
    path: 'user/:username', // http://localhost:4200/user/{email} <- ruta cu un parametru
    component: UserProfilesComponent // <- componenta instantiata cand ruta este accesata
  },

  {
    path: 'user', // http://localhost:4200/user/
    redirectTo: 'main' // cand accesam aceasta cale, suntem redirectionati automat catre http://localhost:4200/main 
  },

  {
    path: 'account-info/:username',
    component: AccountInfoComponent 
  },

  {
    path: 'account-info', // http://localhost:4200/user/
    redirectTo: 'main' // cand accesam aceasta cale, suntem redirectionati automat catre http://localhost:4200/main 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
