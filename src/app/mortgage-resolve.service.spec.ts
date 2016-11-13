/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MortgageResolveService } from './mortgage-resolve.service';

describe('Service: MortgageResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MortgageResolveService]
    });
  });

  it('should ...', inject([MortgageResolveService], (service: MortgageResolveService) => {
    expect(service).toBeTruthy();
  }));
});
