import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserProfile } from 'src/app/interfaces/user-profile';
import { MusicalBand } from 'src/app/interfaces/musical-band';

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

  public getAllUserProfiles(): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(this.url)
  }

  public getUserProfileByUsername(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.url+"/getByOwnerUsername"}/${username}`);
  }

  public editUserProfile(profile: UserProfile): Observable<UserProfile> {
    return this.http.put<UserProfile>(this.url, profile);
  }

  public addBandToUserProfile(userEmail: string, bandId: number): Observable<null> {
    return this.http.put<null>(`${this.url+"/addBandToUserProfile"}/${userEmail}`, bandId);
  }

  public getBandsInvitedToJoin(userId: number): Observable<MusicalBand[]> {
    return this.http.get<MusicalBand[]>(`${this.url}/${userId}/${"bandsInvitedToJoin"}`);
  }

  public deleteUserMatches(userId: number): Observable<null> {
    return this.http.delete<null>(`${this.url+"/bandAndUserMatches"}/${userId}`)
  }

}
