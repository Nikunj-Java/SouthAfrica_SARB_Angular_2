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

  //dependency injection
  constructor(private service: DataService){}

  ngOnInit(): void {
    this.service.getAllPosts().subscribe(result=> this.posts=result);
  }
}
