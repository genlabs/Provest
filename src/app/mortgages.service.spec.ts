/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MortgagesService } from './mortgages.service';

describe('Service: Mortgages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MortgagesService]
    });
  });

  it('should ...', inject([MortgagesService], (service: MortgagesService) => {
    expect(service).toBeTruthy();
  }));
});
