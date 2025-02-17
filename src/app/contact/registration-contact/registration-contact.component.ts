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

  toggleFavorite() {
    this.registrationContact.value.favorite =
      !this.registrationContact.value.favorite;
  }

  formatPhoneNumber(event: any) {
    console.log(event);

    const inputValue = event.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    this.registrationContact.controls['phone'].setValue(inputValue, {
      emitEvent: false,
    });
  }
}
