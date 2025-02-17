import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterModule],
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

  constructor(private router: Router, private authService: AuthService) {}

  toggleRegister() {
    this.isRegistering = !this.isRegistering;
  }

  onRegister(): void {
    const registrationSuccess = this.authService.register(
      this.newUsername,
      this.newPassword
    );

    if (registrationSuccess) {
      alert('Usuário registrado com sucesso!');
      this.newUsername = '';
      this.newPassword = '';
      this.toggleRegister();
    } else {
      alert('Nome de usuário já existe!');
    }
  }

  onLogin(): void {
    const loginSuccess = this.authService.login(this.username, this.password);

    if (loginSuccess) {
      console.log('Login bem-sucedido!');
      this.loginFailed = false;
      this.router.navigate(['/consultation-contact']); // Navegar após login bem-sucedido
    } else {
      this.loginFailed = true;
    }
  }
}
