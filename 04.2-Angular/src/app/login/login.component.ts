import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Input() username: string = '';
  @Input() password: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.authService.login(this.username);
      this.router.navigate(['/dashboard']);
    }
  }
}
