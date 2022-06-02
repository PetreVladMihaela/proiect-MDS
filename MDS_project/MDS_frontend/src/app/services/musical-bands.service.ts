import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MusicalBand } from '../interfaces/musical-band';

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

}
