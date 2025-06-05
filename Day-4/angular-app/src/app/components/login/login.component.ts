import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({ selector: 'app-login', templateUrl: './login.component.html' })
export class LoginComponent {
  constructor(private router: Router) {}

  loginAsUser() {
    localStorage.setItem('token', 'user-token');
    localStorage.setItem('role', 'user');
    this.router.navigate(['/dashboard']);
  }

  loginAsAdmin() {
    localStorage.setItem('token', 'admin-token');
    localStorage.setItem('role', 'admin');
    this.router.navigate(['/admin']);
  }
}
