import { TestBed } from '@angular/core/testing';

import { HttpfetchService } from './httpfetch.service';

describe('HttpfetchService', () => {
  let service: HttpfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
