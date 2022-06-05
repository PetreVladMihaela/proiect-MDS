import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BandHQ } from 'src/app/interfaces/band-hq';

@Injectable({
  providedIn: 'root'
})
export class BandHeadquartersService {

  public url = 'https://localhost:44342/api/bandHeadquarters';

  constructor(
    private http: HttpClient
  ) { }

  public createBandHQ(hq: BandHQ): Observable<BandHQ> {
    return this.http.post<BandHQ>(this.url, hq)
  }

  public updateBandHQ(hq: BandHQ): Observable<BandHQ> {
    return this.http.put<BandHQ>(this.url, hq);
  }
}
