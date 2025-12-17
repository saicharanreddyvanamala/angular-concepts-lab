import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-async-get-demo',
  imports: [CommonModule],
  templateUrl: './http-async-get-demo.html',
  styleUrl: './http-async-get-demo.scss',
})
export class HttpAsyncGetDemo implements OnInit {
  users$!: Observable<User[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  /**
 * HTTP: subscribe() vs async pipe
 * -------------------------------------------
 * subscribe():
 * - Imperative style
 * - Manual handling
 * - OK for HTTP (auto-completes)
 * - Required for side effects
 *
 * async pipe:
 * - Declarative style
 * - Automatic subscribe/unsubscribe
 * - Cleaner templates
 * - Best for displaying data
 *
 * Best practice:
 * - Use async pipe whenever possible
 * - Use subscribe() only for side effects
 */

}
