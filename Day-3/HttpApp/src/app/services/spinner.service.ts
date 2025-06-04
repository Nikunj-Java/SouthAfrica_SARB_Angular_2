// src/app/shared/spinner.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpinnerService {
  loading = new BehaviorSubject<boolean>(false);

  show() {
    this.loading.next(true);
  }

  hide() {
    this.loading.next(false);
  }
}
