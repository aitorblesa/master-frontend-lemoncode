import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { PrivateMenuComponent } from './private-menu/private-menu.component';
import { AuthService } from './auth/auth.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, PrivateMenuComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'App';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLogged();
    this.authService.isLoggedIn$.subscribe((userLogged) => {
      this.isLoggedIn = userLogged;
    });
  }
}
