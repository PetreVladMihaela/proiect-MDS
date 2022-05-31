import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', // ruta prin care este accesat modulul -> http://localhost:4200/auth
              // modulul auth nu mai are alte rute
    component: RegisterComponent // <- componenta instantiata cand ruta este accesata
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
