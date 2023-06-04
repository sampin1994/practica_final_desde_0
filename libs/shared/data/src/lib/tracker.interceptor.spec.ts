import { TestBed } from '@angular/core/testing';

import { TrackerInterceptor } from './tracker.interceptor';

describe('TrackerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TrackerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TrackerInterceptor = TestBed.inject(TrackerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
