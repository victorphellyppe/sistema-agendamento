import { EditContactComponent } from './contact/edit-contact/edit-contact.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationContactComponent } from './contact/registration-contact/registration-contact.component';
import { ConsultationContactComponent } from './contact/consultation-contact/consultation-contact.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';

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
    canActivate: [authGuard],
  },

  {
    path: 'consultation-contact',
    component: ConsultationContactComponent,
    canActivate: [authGuard],
  },

  {
    path: 'edit-contact',
    component: EditContactComponent,
    canActivate: [authGuard],
  },
  {
    path: 'registration-contact',
    component: RegistrationContactComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' },
];
