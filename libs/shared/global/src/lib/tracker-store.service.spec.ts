import { TestBed } from '@angular/core/testing';

import { TrackerStoreService } from './tracker-store.service';

describe('TrackerStoreService', () => {
  let service: TrackerStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackerStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
