import { TestBed } from '@angular/core/testing';

import { OperationTemplateLibService } from './operation-template-lib.service';

describe('OperationTemplateLibService', () => {
  let service: OperationTemplateLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationTemplateLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
