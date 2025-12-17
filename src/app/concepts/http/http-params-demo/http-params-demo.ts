import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http-params-demo',
  imports: [CommonModule],
  templateUrl: './http-params-demo.html',
  styleUrl: './http-params-demo.scss',
})
export class HttpParamsDemo {
  users$!: Observable<User[]>;
  page = 1;
  limit = 2;

  constructor(private http: HttpClient) {}

  loadUsers() {
    let params = new HttpParams()
      .set('page', this.page)
      .set('limit', this.limit);
    this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/', {params});
  }

  /**
 * HTTP PARAMS NOTES
 * -------------------------------------------
 * - HttpParams is used for query parameters
 * - Common use cases:
 *   pagination, filtering, sorting, search
 *
 * IMPORTANT:
 * - HttpParams is IMMUTABLE
 * - Each set() returns a new instance
 *
 * Best practice:
 * - Never manually build URLs
 * - Always use HttpParams
 *
 * Interview tip:
 * - Immutability of HttpParams is often asked
 */

}
