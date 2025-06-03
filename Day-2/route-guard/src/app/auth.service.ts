import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn=false;
  
  login(){
    this.loggedIn=true;
  }

  logout(){
    this.loggedIn=false;
  }

  isLoggedin():boolean{
    return this.loggedIn;
  }

  constructor() { }
}
