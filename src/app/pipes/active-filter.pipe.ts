import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Pipe({
  name: 'activeFilter',
})
export class ActiveFilterPipe implements PipeTransform {
  transform(contacts: Contact[], showActive: boolean): Contact[] {
    if (!contacts) return [];

    if (showActive) {
      return contacts.filter((contact) => contact.active);
    } else {
      return contacts.filter((contact) => !contact.active || contact.active);
    }
  }
}
