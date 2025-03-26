import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  private userNameSubject = new BehaviorSubject<string>('');
  isLoggedIn$ = this.isLoggedInSubject.asObservable();
  userName$ = this.userNameSubject.asObservable();

  constructor(private router: Router) {
    const loggedIn = !!localStorage.getItem('isLoggedIn');
    const user = localStorage.getItem('user');
    this.isLoggedInSubject.next(loggedIn);
    if (user) {
      this.userNameSubject.next(user);
    }
  }

  login(user: string) {
    localStorage.setItem('user', user);
    localStorage.setItem('isLoggedIn', 'loggedIn');
    this.isLoggedInSubject.next(true);
    this.userNameSubject.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
    this.userNameSubject.next('');
    this.router.navigate(['/home']);
  }

  isLogged() {
    const loggedIn = !!localStorage.getItem('isLoggedIn');
    this.isLoggedInSubject.next(loggedIn);
  }

  getUsername() {
    return localStorage.getItem('user');
  }
}
