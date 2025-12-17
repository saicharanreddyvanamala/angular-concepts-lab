import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-http-headers-demo',
  imports: [CommonModule],
  templateUrl: './http-headers-demo.html',
  styleUrl: './http-headers-demo.scss',
})
export class HttpHeadersDemo {
  users$!: Observable<User[]>;
  constructor(private http: HttpClient) {}

  loadUsersWithHeaders(){
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer dummy-token-123')
      .set('X-App-Version', '1.0');

      this.users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/', {headers})
  }

  /**
 * HTTP HEADERS NOTES
 * -------------------------------------------
 * - HttpHeaders is used to send metadata
 * - Common use cases:
 *   Authorization, Content-Type, custom headers
 *
 * IMPORTANT:
 * - HttpHeaders is IMMUTABLE
 * - Each set() returns a new instance
 *
 * Best practice:
 * - Do NOT set auth headers in components
 * - Use HttpInterceptor instead
 *
 * Interview tip:
 * - Headers are immutable (frequently asked)
 */

}
