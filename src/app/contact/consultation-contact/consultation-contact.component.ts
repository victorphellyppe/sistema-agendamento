import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactService } from '../../services/contact.service';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { FavoriteFilterPipe } from '../../pipes/favorite-filter.pipe';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActiveFilterPipe } from '../../active-filter.pipe';

@Component({
  selector: 'app-consultation-contact',
  imports: [
    CommonModule,
    FavoriteFilterPipe,
    ActiveFilterPipe,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [KeyValuePipe],

  templateUrl: './consultation-contact.component.html',
  styleUrl: './consultation-contact.component.scss',
})
export class ConsultationContactComponent implements OnInit {
  contacts: any[] = [];
  favoriteContacts: Contact[] = [];
  showFavorites: boolean = false;
  showActive: boolean = true;
  editMode: boolean = false;
  editIndex: number = -1;
  formEdit!: FormGroup;
  constructor(
    private contactSvc: ContactService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.contacts = this.contactSvc.getContactsFromLocalStorage();
    console.log(this.contacts, 'VICTOR');
    this.favoriteContacts = this.contacts.filter((contact) => contact.favorite);
    console.log(this.favoriteContacts, 'VICTOR');

    this.formEdit = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      favorite: [false],
      active: [true],
    });
  }

  editContact(index: number): void {
    console.log(index, 'index');
    const contact = this.contacts[index];
    console.log(contact, 'const');

    this.editIndex = index;
    this.formEdit.setValue({
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      favorite: contact.favorite ?? false,
      active: contact.active ?? true,
    });
    this.editMode = true;
  }

  editContactSubmit(): void {
    if (this.formEdit.valid) {
      const updatedContact = this.formEdit.value;

      this.contacts[this.editIndex] = {
        ...this.contacts[this.editIndex],
        ...updatedContact,
      };

      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      console.log(
        'Contatos atualizados:',
        JSON.parse(localStorage.getItem('contacts')!)
      );

      this.formEdit.reset();
      this.editMode = false;

      this.cdRef.markForCheck();
      this.loadContacts();
    }
  }

  deleteContact(index: number): void {
    const confirmDelete = window.confirm(
      'Você tem certeza de que deseja excluir este contato?'
    );

    if (confirmDelete) {
      this.contacts.splice(index, 1);

      localStorage.setItem('contacts', JSON.stringify(this.contacts));

      console.log('Contato excluído:', this.contacts);

      this.loadContacts();

      this.cdRef.detectChanges();
    } else {
      console.log('Exclusão cancelada');
    }
  }

  loadContacts(): void {
    const storedContacts = localStorage.getItem('contacts');
    this.contacts = storedContacts ? JSON.parse(storedContacts) : [];
  }
}
