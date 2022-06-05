import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile } from 'src/app/interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfilesService {

  public url = 'https://localhost:44342/api/userProfiles';

  constructor(
    private http: HttpClient,
  ) { }

  public createUserProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(this.url, profile) // acceseaza ruta de post din controller
  }

  public getUserProfileByUsername(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.url+"/withOwner"}/${username}`);
  }

  public editUserProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(this.url, profile);
  }

  public addBandToUserProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(this.url+"/addBandToUserProfile", profile);
  }

}
