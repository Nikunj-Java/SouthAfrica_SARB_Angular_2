import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",
    component:DashboardComponent,
    canActivate:[authGuard]
  
  },
  {path:"home",component:HomeComponent,canActivate:[authGuard]},
  {path:"users",component:UsersComponent,canActivate:[authGuard]},
  {path:"accounts",component:AccountsComponent,canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
