import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listing'
})
export class ListingPipe implements PipeTransform {

  transform(items: any[]): any {
    return items.filter(item => item.status == 'listing');
  }

}
