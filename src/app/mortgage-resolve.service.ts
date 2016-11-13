import { Injectable } from '@angular/core';

import { Mortgage } from './mortgage';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MortgagesService  } from './mortgages.service';


@Injectable()
export class MortgageResolveService implements Resolve<Mortgage> {

  constructor(private mortgageService:MortgagesService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.mortgageService.getMortgageById(route.params.mId);
  }

}
