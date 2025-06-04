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
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { canDeactivateGuard } from './can-deactivate.guard';
import { resolveGuard } from './resolve.guard';

const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:"login",component:LoginComponent},
  {path:"dashboard",
    component:DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[authGuard],
    canActivateChild:[authChildGuard],
    children:[
      {path:"child-a",component:ChildAComponent},
      {path:"child-b",component:ChildBComponent}
    ]

  },
  // {path:"admin/users",component:UsersComponent,canActivate: [roleGuard],
  //   data: { expectedRole: 'admin' }},
  // {path:"admin/accounts",component:AccountsComponent,canActivate: [roleGuard],
  //   data: { expectedRole: 'admin' }},
  {
    path: 'admin',
    component: AdminComponent,
    canMatch:[resolveGuard],
    loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)
   //canActivate: [roleGuard],
    //data: { expectedRole: 'admin' }
  },
  {path:"edit-profile",
    component:EditProfileComponent,
    canDeactivate:[canDeactivateGuard]
  },
  { path: 'not-authorized', component: NotAuthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
