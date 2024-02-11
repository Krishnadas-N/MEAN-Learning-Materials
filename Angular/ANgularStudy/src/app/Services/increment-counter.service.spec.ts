import { TestBed } from '@angular/core/testing';

import { IncrementCOunterService } from './increment-counter.service';

describe('IncrementCOunterService', () => {
  let service: IncrementCOunterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncrementCOunterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
