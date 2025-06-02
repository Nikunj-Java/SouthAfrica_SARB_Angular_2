import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"http",component:UsersComponent},
  {path:"dashboard",component:DashboardComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
