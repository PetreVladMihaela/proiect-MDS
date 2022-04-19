import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private router: Router,
  ) {
    console.log('AuthorizationGuard'); //puteti comenta asta
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isAuthorized = false; // isAuthorized poate fi true sau false 
    const role = localStorage.getItem('Role');
    if(role) { isAuthorized = role !== 'Unknown'; }
    if (isAuthorized == false) { // daca nu suntem autentificati suntem redirectionati catre pagina de login/register
      console.error('You are not authorized!');
      this.router.navigate(['auth']); // daca avem ruta cu parametru (de exemplu accesam profilul unui user dupa email)
                                       // folosim this.router.navigate(['/ruta', parametru]);
    }
    return isAuthorized;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(childRoute, state);
  }
}
