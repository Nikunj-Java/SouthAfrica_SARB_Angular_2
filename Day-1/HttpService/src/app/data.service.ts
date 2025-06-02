import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostClass } from './PostClass';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string="https://jsonplaceholder.typicode.com/posts";

  //Dependency Injection of HttpClient Module in Service
  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<PostClass[]>{
    return this.http.get<PostClass[]>(this.url);
  }
}
