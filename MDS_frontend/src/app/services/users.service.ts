import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { User } from '../interfaces/user';

// serviciile fac legatura cu backendul
// in general facem un serviciu pentru fiecare controller din backend

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public url = 'https://localhost:44342/api/users'; // calea catre controllerul din backend

  constructor(
    private http: HttpClient,
    // Daca avem nevoie de un alt serviciu tot aici il punem ->
    // -> de exemplu daca am avea un ProfilesService si am avea nevoie de o functie din el am scrie:
    // private profilesService: ProfilesService
    // iar functia necesara din ProfilesService se apeleaza astfel:
    // this.profilesService.nume_functie()
  ) { }

  // trebuie creata o interfata User
  public createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user) // acceseaza ruta de post din controller
  }

  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url) // acceseaza ruta de get din controller
  }

  public checkIfUsernameExists(value: string): Observable<boolean>{
    return this.getAllUsers().pipe(
      map((users) => users.some((user) => user.username === value))
    )
  }

  public checkIfEmailExists(value: string): Observable<boolean> {
    return this.getAllUsers().pipe(
      map((users) => users.some((user) => user.email === value))
    )
  }

  public getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.url+"/getByUsername"}/${username}`);
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.url+"/getByEmail"}/${email}`);
  }

}
