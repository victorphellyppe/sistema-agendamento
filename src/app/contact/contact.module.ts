import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ConsultationContactComponent } from './consultation-contact/consultation-contact.component';
import { RegistrationContactComponent } from './registration-contact/registration-contact.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ConsultationContactComponent,
    RegistrationContactComponent,
  ],
})
export class ContactModule {}
