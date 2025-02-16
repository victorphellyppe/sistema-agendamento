import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username!: string;
  newUsername!: string;
  newPassword!: string;
  password!: string;
  loginFailed: boolean = false;
  registrationFailed: boolean = false;
  isRegistering: boolean = false;

  onLogin() {}
  toggleRegister() {
    this.isRegistering = !this.isRegistering;
    this.loginFailed = false;
    this.registrationFailed = false;
  }
  onRegister() {}
}
