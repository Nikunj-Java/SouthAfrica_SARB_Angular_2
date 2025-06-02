import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
