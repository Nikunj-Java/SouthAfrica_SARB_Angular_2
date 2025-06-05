import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { combineLatest, of } from 'rxjs';
import { map, startWith, switchMap } from 'rxjs/operators';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html'
})
export class UserFilterComponent implements OnInit {
  searchControl = new FormControl('');
  companyControl = new FormControl('');
  filteredUsers: any[] = [];
  companies: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    // Get users first
    this.userService.getUsers().subscribe(users => {
      // Extract unique companies
      this.companies = [...new Set(users.map(u => u.company.name))];

      // Reactive filter setup
      const search$ = this.searchControl.valueChanges.pipe(startWith(''));
      const company$ = this.companyControl.valueChanges.pipe(startWith(''));

      combineLatest([search$, company$])
        .pipe(
          map(([search, company]) =>
            users.filter(user =>
              user.name.toLowerCase().includes((search || '').toLowerCase()) &&
              (!company || user.company.name === company)
            )
          )
        )
        .subscribe(result => {
          this.filteredUsers = result;
        });
    });
  }
}
