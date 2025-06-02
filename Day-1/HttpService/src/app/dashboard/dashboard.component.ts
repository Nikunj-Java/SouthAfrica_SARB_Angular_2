import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  mergedData: any[] = [];
  loading = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCombinedData().subscribe(([users, posts, comments]) => {
      this.mergedData = users.map(user => {
        const userPosts = posts.filter(p => p.userId === user.id);
        const userCommentsCount = userPosts
          .map(post => comments.filter(c => c.postId === post.id).length)
          .reduce((a, b) => a + b, 0);
        return {
          ...user,
          postCount: userPosts.length,
          commentCount: userCommentsCount
        };
      });
      this.loading = false;
    });
  }
}