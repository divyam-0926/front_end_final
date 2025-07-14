import { TestBed } from '@angular/core/testing';

import { DayDetailService } from './trip-days.service';

describe('DayDetailService', () => {
  let service: DayDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
