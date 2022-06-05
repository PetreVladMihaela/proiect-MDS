import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAddress } from 'src/app/interfaces/user-address';

@Injectable({
  providedIn: 'root'
})
export class UserAddressesService {

  public url = 'https://localhost:44342/api/userAddresses';

  constructor(
    private http: HttpClient
  ) { }

  public createUserAddress(address: UserAddress): Observable<UserAddress> {
    return this.http.post<UserAddress>(this.url, address)
  }

  public editUserAddress(address: UserAddress): Observable<UserAddress> {
    return this.http.put<UserAddress>(this.url, address);
  }
}
