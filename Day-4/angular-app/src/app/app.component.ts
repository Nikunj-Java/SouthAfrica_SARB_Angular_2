import { Component } from '@angular/core';
import { UserService } from './service/user.service';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';

  searchControl= new FormControl('');
  users:any[]=[];
  constructor(private service:UserService){
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(value=> this.service.serachUsers(value ?? ''))
    ).subscribe(data=>this.users=data)
    

  }

}
