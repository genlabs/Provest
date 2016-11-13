import { Injectable } from '@angular/core';

import { Mortgage } from './mortgage';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { MortgagesService  } from './mortgages.service';


@Injectable()
export class MortgageResolveService implements Resolve<Mortgage> {

  constructor(private mortgageService:MortgagesService, private route:ActivatedRoute) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ){
    
    return this.mortgageService.getMortgageById(route.params["mId"]);
  }

}
