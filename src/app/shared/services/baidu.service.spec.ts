/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaiduService } from './baidu.service';

describe('Service: Baidu', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaiduService]
    });
  });

  it('should ...', inject([BaiduService], (service: BaiduService) => {
    expect(service).toBeTruthy();
  }));
});