import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpService';

  userName='Alice';
  showUser=true;

  toggleUser(){
    this.showUser= !this.showUser;
  }

  changeName(){
    this.userName= this.userName ==='Alice'?'Bob' : 'Alice';
  }
}
