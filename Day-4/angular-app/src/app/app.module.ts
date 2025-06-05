import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectiveComponent } from './directive/directive.component';
import { MyIfDirective } from './my-if-directive';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    MyIfDirective,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
