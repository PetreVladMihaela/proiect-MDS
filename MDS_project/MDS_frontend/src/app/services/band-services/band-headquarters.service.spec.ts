import { TestBed } from '@angular/core/testing';

import { BandHeadquartersService } from './band-headquarters.service';

describe('BandHeadquartersService', () => {
  let service: BandHeadquartersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandHeadquartersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
