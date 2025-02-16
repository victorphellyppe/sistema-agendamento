import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;
  private users = new Map<string, string>();

  constructor() {}

  login(username: string, password: string): boolean {
    if (this.users.has(username) && this.users.get(username) === password) {
      this.loggedIn = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  register(username: string, password: string): boolean {
    if (this.users.has(username)) {
      return false;
    }

    this.users.set(username, password);
    return true;
  }
}
