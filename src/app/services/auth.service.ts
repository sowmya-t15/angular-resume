import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Simple admin credentials (in a real app, this would be handled securely)
  private adminCredentials = {
    username: 'admin',
    password: 'admin123'
  };

  private isAdminLoggedInSubject = new BehaviorSubject<boolean>(false);
  isAdminLoggedIn$ = this.isAdminLoggedInSubject.asObservable();

  constructor() { }

  login(username: string, password: string): boolean {
    if (username === this.adminCredentials.username && 
        password === this.adminCredentials.password) {
      this.isAdminLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAdminLoggedInSubject.next(false);
  }

  get isLoggedIn(): boolean {
    return this.isAdminLoggedInSubject.value;
  }
}
