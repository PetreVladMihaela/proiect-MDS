import { TestBed } from '@angular/core/testing';

import { UserAddressesService } from './user-addresses.service';

describe('UserAddressesService', () => {
  let service: UserAddressesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAddressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
