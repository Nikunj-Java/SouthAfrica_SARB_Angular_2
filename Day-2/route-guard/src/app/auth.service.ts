import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn=false;
  private currentUser:{username: string; role: string} | null=null;

  loginAsUser(){
    this.currentUser={username:'jhon',role:'user'};
    this.login();
  }
  loginAsAdmin(){
    this.currentUser={username:'admin',role:'admin'};
    this.login();
        
  }
  
  logout(){
    this.currentUser=null;
    this.loggedIn=false;
  }

  isLoggedin():boolean{
    return this.currentUser !==null && this.loggedIn;
  }
  getRole():string |null {
    return this.currentUser?.role || null;
  }

  login(){
    this.loggedIn=true
     
  }
  isLoggedOut():boolean{
    return this.currentUser ==null && this.loggedIn;
  }
  
}
