import { TestBed } from '@angular/core/testing';

import { DashboardLibService } from './dashboard-lib.service';

describe('DashboardLibService', () => {
  let service: DashboardLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
