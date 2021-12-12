import { TestBed } from '@angular/core/testing';

import { VpcLibService } from './vpc-lib.service';

describe('VpcLibService', () => {
  let service: VpcLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VpcLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
