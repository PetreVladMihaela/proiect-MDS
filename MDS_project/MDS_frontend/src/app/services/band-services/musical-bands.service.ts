import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BandAndUserMatch } from 'src/app/interfaces/band-user-match';
import { MusicalBand } from 'src/app/interfaces/musical-band';
import { UserProfile } from 'src/app/interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class MusicalBandsService {

  public url = 'https://localhost:44342/api/musicalBands';

  constructor(
    private http: HttpClient,
  ) { }

  public getBandById(id: number): Observable<MusicalBand> {
    return this.http.get<MusicalBand>(`${this.url+"/withMembers"}/${id}`);
  }

  public createBand(band: MusicalBand): Observable<number> {
    return this.http.post<number>(this.url, band)
  }

  public updateBandInfo(band: MusicalBand): Observable<MusicalBand> {
    return this.http.put<MusicalBand>(this.url, band);
  }

  public getMatchedUserProfiles(bandId: number): Observable<UserProfile[]> {
    return this.http.get<UserProfile[]>(`${this.url}/${bandId}/${"matchedUserProfiles"}`);
  }

  
  public saveBandAndUserMatches(matches: BandAndUserMatch[]): Observable<null> {
    return this.http.post<null>(this.url+"/bandAndUserMatches", matches)
  }

  public deleteBandAndUserMatches(bandId: number): Observable<null> {
    return this.http.delete<null>(`${this.url+"/bandAndUserMatches"}/${bandId}`)
  }

  public updateBandAndUserMatches(matches: BandAndUserMatch[]): Observable<null> {
    return this.http.put<null>(this.url+"/bandAndUserMatches", matches)
  }

  public updateBandAndUserMatch(match: BandAndUserMatch): Observable<null> {
    return this.http.put<null>(this.url+"/bandAndUserMatch", match)
  }

  public deleteBandAndUserMatch(bandId: number, userId: number): Observable<null> {
    return this.http.delete<null>(`${this.url+"/bandAndUserMatch"}/${bandId}/${userId}`)
  }

}
