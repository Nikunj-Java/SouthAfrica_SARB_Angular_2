import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }
  serachUsers(query: String){
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
  }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
  }
  getUserPosts(userId:number):Observable<any[]>{
    return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  }
}
