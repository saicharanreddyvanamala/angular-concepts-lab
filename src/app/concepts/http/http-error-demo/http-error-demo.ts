import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-error-demo',
  imports: [CommonModule],
  templateUrl: './http-error-demo.html',
  styleUrl: './http-error-demo.scss',
})
export class HttpErrorDemo {
  users$!: Observable<User[]>;
  errorMessage = '';
  constructor(private http: HttpClient) {}

  loadUsers() {
    this.errorMessage = '';
    this.users$ = this.http.
      get<User[]>('https://jsonplaceholder.typicode.com/invalid-url')
      .pipe(
        catchError(error => {
          console.log('HTTP Error: ', error);
          this.errorMessage = 'Failed to load users';
          return of([]); // fallback value
        })
      )
  }

  /**
 * HTTP ERROR HANDLING NOTES
 * -------------------------------------------
 * - HttpClient emits errors via Observable error channel
 * - try/catch does NOT work for HTTP
 *
 * catchError():
 * - Intercepts HTTP errors
 * - Must return a new Observable
 *
 * Common patterns:
 * - return of([]) → fallback value
 * - rethrow error → global handler
 *
 * Best practice:
 * - Handle UI-safe errors in component
 * - Handle auth/server errors in interceptor
 */

}
