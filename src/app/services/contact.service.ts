import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    // {
    //   id: 1,
    //   name: 'Victor Oliveira',
    //   phone: '82988260479',
    //   email: 'vitinifal@gmail.com',
    //   favorite: false,
    //   active: true,
    // },
    // {
    //   id: 2,
    //   name: 'Anthony Miguel de Oliveira',
    //   phone: '8294260563',
    //   email: 'anthonyoliveira@gmail.com',
    //   favorite: true,
    //   active: true,
    // },
  ];
  private contatosSource = new BehaviorSubject<any[]>([]);
  contatos$ = this.contatosSource.asObservable();
  constructor() {}

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find((c) => c.id === id);
  }

  addContact(contact: Contact): void {
    const currentContatos = this.getContactsFromLocalStorage();
    console.log(contact, currentContatos);

    const updatedContatos = [...currentContatos, contact];

    this.saveContactsToLocalStorage(updatedContatos);

    this.contatosSource.next(updatedContatos);
  }

  getContactsFromLocalStorage(): Contact[] {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  }

  saveContactsToLocalStorage(contacts: Contact[]): void {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  updateContact(contact: Contact): void {
    const index = this.contacts.findIndex((c) => c.id === contact.id);
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter((c) => c.id !== id);
  }
}
