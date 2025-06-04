import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: any[]=[];
  constructor(private service: DataService){}

  ngOnInit(): void {
   this.service.getData().subscribe({
    next:data=> this.posts=data,
    error: err=> console.log('Component Error: ',err)
   });
  }
  title = 'HttpApp';

}
