import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  constructor() {}

  login(username: string, password: string): boolean {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      this.loggedIn = true;
      return true;
    }

    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  register(username: string, password: string): boolean {
    const existingUsername = localStorage.getItem('username');

    if (existingUsername) {
      return false;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    return true;
  }
}
