import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoginComponent } from './login/login.component';
import { authChildGuard, authGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { roleGuard } from './role.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",
    component:DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path:"home",
    component:HomeComponent,
    canActivateChild:[authGuard,authChildGuard],
    children:[
      {path:"child-a",component:ChildAComponent},
      {path:"child-b",component:ChildBComponent}
    ]

  },
  {path:"users",component:UsersComponent},
  {path:"accounts",component:AccountsComponent},
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [roleGuard],
    data: { expectedRole: 'admin' }
  },
  { path: 'not-authorized', component: NotAuthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
