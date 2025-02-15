import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'favoriteFilter',
})
export class FavoriteFilterPipe implements PipeTransform {
  transform(contacts: any[], showFavorites: boolean): any[] {
    if (!contacts) return [];
    return showFavorites
      ? contacts.filter((contact) => contact.favorite)
      : contacts;
  }
}
