import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [ // Aici punem caile(rutele) principale ale aplicatiei web ->
                         //            -> acestea sunt rutele modulului principal, adica app.module
                         // Prin rute navigam de la un modul la altul in cadrul aplicatiei.
                         // Orice modul are un routing-module in care i se configureaza rutele. 
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: '', //calea initiala -> http://localhost:4200/
        loadChildren: () => import('src/app/modules/users/users.module').then(m => m.UsersModule)
      },
    ]
  },

  {
    path: 'auth', //calea catre pagina de login/register -> http://localhost:4200/auth
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
