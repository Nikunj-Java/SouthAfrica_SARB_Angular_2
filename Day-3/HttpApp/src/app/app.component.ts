import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: any[]=[];
  constructor(private service: DataService,private spinner: SpinnerService){
     this.spinner.loading.subscribe(value => {
        this.isLoading = value;
      });
  }

  isLoading = false;
  
     

  ngOnInit(): void {
   this.service.getData().subscribe({
    next:data=> this.posts=data,
    error: err=> console.log('Component Error: ',err)
   });
  }
  title = 'HttpApp';

}
