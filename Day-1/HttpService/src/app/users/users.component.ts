import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../posts.service';
import { CommentService } from '../comments.service';
import { User, Post, Comment } from '../model';

declare var bootstrap: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  posts: Post[] = [];
  comments: Comment[] = [];
  loading = true;

  selectedUser: User | null = null;
  userPosts: Post[] = [];
  postComments: { [postId: number]: Comment[] } = {};

  constructor(
    private userService: UserService,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    Promise.all([
      this.userService.getUsers().toPromise(),
      this.postService.getPosts().toPromise(),
      this.commentService.getComments().toPromise()
    ])
      .then(([users, posts, comments]) => {
        this.users = users!;
        this.posts = posts!;
        this.comments = comments!;
        this.loading = false;
      })
      .catch(err => {
        console.error('API Error:', err);
        this.loading = false;
      });
  }

  openUserDetails(user: User): void {
    this.selectedUser = user;
    this.userPosts = this.posts.filter(p => p.userId === user.id);
    this.postComments = {};

    this.userPosts.forEach(post => {
      this.postComments[post.id] = this.comments.filter(c => c.postId === post.id);
    });

    const modalEl = document.getElementById('userModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }
}
