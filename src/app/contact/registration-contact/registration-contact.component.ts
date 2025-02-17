import { Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration-contact',
  imports: [ReactiveFormsModule],
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
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      favorite: [false],
      active: [true],
    });
  }

  onSubmit(): void {
    console.log(this.registrationContact.value);

    const newContact: Contact = {
      id: this.idContact++,
      name: this.registrationContact.value.name,
      phone: this.registrationContact.value.phone,
      email: this.registrationContact.value.email,
      favorite: this.registrationContact.value.favorite,
      active: this.registrationContact.value.active,
    };

    console.log(newContact, 'aqui');

    this.contactSvc.addContact(newContact);
    this.registrationContact.reset();
  }

  toggleFavorite(): void {
    this.registrationContact.patchValue({
      favorite: !this.registrationContact.value.favorite,
    });
  }

  formatPhoneNumber(event: any): void {
    let input = event.target.value.replace(/\D/g, '');
    if (input.length <= 2) {
      input = `(${input}`;
    } else if (input.length <= 6) {
      input = `(${input.substring(0, 2)}) ${input.substring(2)}`;
    } else {
      input = `(${input.substring(0, 2)}) ${input.substring(
        2,
        7
      )}${input.substring(7, 11)}`;
    }
    event.target.value = input; // Set the formatted phone number in the input field
  }

  updateEmail(newEmail: string) {
    this.registrationContact.get('email')?.setValue(newEmail);
  }
}
