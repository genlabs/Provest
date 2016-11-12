/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PendingMortgagesService } from './pending-mortgages.service';

describe('Service: PendingMortgages', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingMortgagesService]
    });
  });

  it('should ...', inject([PendingMortgagesService], (service: PendingMortgagesService) => {
    expect(service).toBeTruthy();
  }));
});
