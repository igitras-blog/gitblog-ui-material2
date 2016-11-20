/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CatelogService } from './catelog.service';

describe('Service: Catelog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatelogService]
    });
  });

  it('should ...', inject([CatelogService], (service: CatelogService) => {
    expect(service).toBeTruthy();
  }));
});