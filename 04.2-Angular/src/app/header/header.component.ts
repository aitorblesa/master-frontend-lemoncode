import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  username: string | null = '';
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.userName$.subscribe((userLogged) => {
      this.username = userLogged;
    });

    this.authService.isLoggedIn$.subscribe((userLogged) => {
      this.isLoggedIn = userLogged;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
