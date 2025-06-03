import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginAsUser() {
    this.authService.loginAsUser();
    this.router.navigate(['/']);
  }

  loginAsAdmin() {
    this.authService.loginAsAdmin();
    this.router.navigate(['/admin']);
  }

  loginChild(){
    this.authService.login();
    this.router.navigate(['/home/child-a'])
  }
}
