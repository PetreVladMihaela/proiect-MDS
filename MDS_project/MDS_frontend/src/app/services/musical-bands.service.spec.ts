import { TestBed } from '@angular/core/testing';

import { MusicalBandsService } from './musical-bands.service';

describe('MusicalBandsService', () => {
  let service: MusicalBandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicalBandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
