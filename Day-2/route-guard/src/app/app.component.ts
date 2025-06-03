import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route-guard';

  constructor(private service:AuthService){}

  logout(){
    this.service.logout();
    alert('User Logged Out Successfully!')
  }
}
