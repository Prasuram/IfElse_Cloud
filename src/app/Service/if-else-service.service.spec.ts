import { TestBed } from '@angular/core/testing';

import { IfElseServiceService } from './if-else-service.service';

describe('IfElseServiceService', () => {
  let service: IfElseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfElseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
