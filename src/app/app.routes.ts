import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationContactComponent } from './contact/registration-contact/registration-contact.component';
import { ConsultationContactComponent } from './contact/consultation-contact/consultation-contact.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },

  { path: 'consultation-contact', component: ConsultationContactComponent },

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
