import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class CounterStore {

  private _count = signal(0);

  readonly count = this._count.asReadonly();

  private _users = signal<User[]>([]);
  readonly users = this._users.asReadonly();

  increment() {
    this._count.update(v => v + 1);
  }

  decrement() {
    this._count.update(v => v - 1);
  }

  set(v: number) {
    this._count.set(v);
  }

  loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(r => r.json())
    .then(data => {
      this._users.set(data);
    });
  }
}
