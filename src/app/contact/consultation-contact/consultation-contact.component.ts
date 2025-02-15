import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../services/contact.service';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { FavoriteFilterPipe } from '../../pipes/favorite-filter.pipe';
import { FormsModule } from '@angular/forms';
import { ActiveFilterPipe } from '../../active-filter.pipe';

@Component({
  selector: 'app-consultation-contact',
  imports: [CommonModule, FavoriteFilterPipe, ActiveFilterPipe, FormsModule],
  providers: [KeyValuePipe],

  templateUrl: './consultation-contact.component.html',
  styleUrl: './consultation-contact.component.scss',
})
export class ConsultationContactComponent implements OnInit {
  contacts: any[] = [];
  favoriteContacts: Contact[] = [];
  showFavorites: boolean = false;
  showActive: boolean = true;

  constructor(private contactSvc: ContactService) {}
  ngOnInit(): void {
    this.contacts = this.contactSvc.getContactsFromLocalStorage();
    console.log(this.contacts, 'VICTOR');
    this.favoriteContacts = this.contacts.filter((contact) => contact.favorite);
    console.log(this.favoriteContacts, 'VICTOR');
  }

  editContact(contact: Contact) {}

  deleteContact(contact: Contact) {}
}
