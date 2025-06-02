import { Component, OnInit } from '@angular/core';
import { PostClass } from '../PostClass';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  posts:PostClass[];
  loading=true;

  //dependency injection
  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.getAllPosts().subscribe(
      (data)=>{
        this.posts=data;
        this.loading=false;
      }
    );
  }
}
