import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../can-deactivate.interface';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent  implements CanComponentDeactivate  {
  name='';
  saved=false;
  save(){
    this.saved=true;
    alert('Profile Saved');

  }

  canDeactivate():boolean{
    if(!this.saved && this.name){
      return confirm('You have Unsaved changes. Leave anyway?');
    }
    return true;
  }


}
