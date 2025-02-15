import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-contact.component.html',
  styleUrl: './registration-contact.component.scss',
  standalone: true,
})
export class RegistrationContactComponent implements OnInit {
  contact: Contact = {
    id: 0,
    name: '',
    phone: '',
    email: '',
    favorite: false,
    active: true,
  };

  contacts: Contact[] = [];

  registrationContact!: FormGroup;

  idContact: number = 1;

  constructor(
    private contactSvc: ContactService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.registrationContact = this.fb.group({
      name: [''],
      phone: [''],
      email: [''],
      favorite: [false],
      active: [true],
    });
  }

  onSubmit(): void {
    const newContact: Contact = {
      id: this.idContact++,
      name: this.registrationContact.value.name,
      phone: this.registrationContact.value.contact,
      email: this.registrationContact.value.email,
      favorite: this.registrationContact.value.favorite,
      active: this.registrationContact.value.active,
    };

    this.contactSvc.addContact(newContact);
    console.log(this.contactSvc.getContacts());
  }

  toggleFavorite() {
    this.registrationContact.value.favorite =
      !this.registrationContact.value.favorite;
  }
}
