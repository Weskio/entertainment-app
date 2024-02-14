import { TestBed } from '@angular/core/testing';

import { EntertainmentDataService } from './entertainment-data.service';

describe('EntertainmentDataService', () => {
  let service: EntertainmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntertainmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
