import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFood'
})
export class FilterFoodPipe implements PipeTransform {

  transform(items: any[], searchQuery: string): any[] {
    if (!items || !searchQuery) {
      return items;
    }
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

}
