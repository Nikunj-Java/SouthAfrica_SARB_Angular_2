import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  private currentUser:{username: string; role: string} | null=null;

  loginAsUser(){
    this.currentUser={username:'jhon',role:'user'};
  }
  loginAsAdmin(){
    this.currentUser={username:'admin',role:'admin'};
  }
  
  logout(){
    this.currentUser=null;
  }

  isLoggedin():boolean{
    return this.currentUser !==null;
  }
  getRole():string |null {
    return this.currentUser?.role || null;
  }

  constructor() { }
}
