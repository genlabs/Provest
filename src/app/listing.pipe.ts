import { Pipe, PipeTransform } from '@angular/core';
import { PendingMortgagesService } from './pending-mortgages.service';

@Pipe({
  name: 'listing'
})
export class ListingPipe implements PipeTransform {

  constructor(private pendingService:PendingMortgagesService) {}
  transform(items: any[]): any {
    return items.filter(item => (item.status == 'listing' && !this.pendingService.isMortgagePending(item.mId)));
  }

}
