import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { from} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  //allPosts:any[]=[];
  userPostList:{name:string,posts:any[]}[]=[];
  constructor(private service:UserService){}
  ngOnInit(): void {
    this.service.getUsers().subscribe(users=>{
      //Create a stream from user array
      from(users).pipe(
        mergeMap(user=>this.service.getUserPosts(user.id).pipe(
          map(posts=>({
            name:user.name,posts
          }))
        ))
      ).subscribe(UserData=>{
        this.userPostList.push(UserData);
      });
    });
  }

}
