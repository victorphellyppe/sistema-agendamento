import { Contact } from '../../interfaces/contact';
import { ContactService } from './../../services/contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-contacts',
  templateUrl: './favorite-contacts.component.html',
  styleUrls: ['./favorite-contacts.component.css'],
})
export class FavoriteContactsComponent implements OnInit {
  favoriteContacts: any[] = [];
  contacts: Contact[] = [];

  constructor(private contactSvc: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactSvc.getContactsFromLocalStorage();
    console.log(this.contacts, 'contacts');

    this.favoriteContacts = this.contacts.filter((contact) => contact.favorite);
  }
}
