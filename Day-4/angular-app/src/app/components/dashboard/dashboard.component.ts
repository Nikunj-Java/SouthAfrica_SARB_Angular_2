import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../models/task.model';
import { Subject, takeUntil } from 'rxjs';

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html' })
export class DashboardComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  destroy$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Task[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => this.tasks = data.slice(0, 10));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
