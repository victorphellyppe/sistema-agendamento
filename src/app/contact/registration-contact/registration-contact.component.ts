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

  registrationContact!: FormGroup;

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
    this.contact.id = this.contactSvc.getContacts().length + 1;
    this.contactSvc.addContact(this.contact);
    this.router.navigate(['/contacts']);
  }

  toggleFavorite() {}
  toggleActive() {}
}
