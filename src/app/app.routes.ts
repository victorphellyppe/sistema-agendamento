import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsultationContactComponent } from './components/consultation-contact/consultation-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { RegistrationContactComponent } from './components/registration-contact/registration-contact.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'consultation-contact',
    component: ConsultationContactComponent,
  },

  {
    path: 'edit-contact',
    component: EditContactComponent,
  },
  {
    path: 'registration-contact',
    component: RegistrationContactComponent,
  },
  { path: '**', redirectTo: '' },
];
