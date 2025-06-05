import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { UsersComponent } from './users/users.component';
import { UserFilterComponent } from './user-filter/user-filter.component';

const routes: Routes = [
  {path:"directives",component:DirectiveComponent},
  {path:"users",component:UsersComponent},
    {path:"filter",component:UserFilterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
