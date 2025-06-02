import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { PostClass } from './PostClass';
import { User } from './users/user.model';
import { Post } from './users/post.model';
import { Comment } from './users/comment.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    url:string="https://jsonplaceholder.typicode.com/posts";

  // //Dependency Injection of HttpClient Module in Service
  // constructor(private http: HttpClient) { }

  // getAllPosts(): Observable<PostClass[]>{
  //   return this.http.get<PostClass[]>(this.url);
  // }

  constructor(private http: HttpClient) {}

  getCombinedData(): Observable<[User[], Post[], Comment[]]> {
    const users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
    const posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    const comments$ = this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');

    return forkJoin([users$, posts$, comments$]);
  }
  
  getAllPosts(): Observable<PostClass[]>{
    return this.http.get<PostClass[]>(this.url);
  }
}
