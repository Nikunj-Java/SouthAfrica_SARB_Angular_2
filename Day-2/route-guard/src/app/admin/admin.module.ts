import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";

@NgModule({
  imports:[
    RouterModule.forChild([
      {path:'',component:AdminComponent}
    ])
  ]
})
export class AdminModule{}