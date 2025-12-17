import { Component } from '@angular/core';
import { catchError, Observable, of, retry } from 'rxjs';
import { User } from '../interfaces/user.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-retry-demo',
  imports: [CommonModule],
  templateUrl: './http-retry-demo.html',
  styleUrl: './http-retry-demo.scss',
})
export class HttpRetryDemo {
  users$!: Observable<User[]>;
  error = '';

  constructor(private http: HttpClient) {}

  loadUsers() {
    this.error = '';

    this.users$ = this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/invalid-url')
      .pipe(
        retry(3),
        catchError(err => {
          this.error = 'Failed after retrying';
          return of([]);
        })
      );
  }
// retryWhen Example code
//   import { retryWhen, delay, take } from 'rxjs/operators';

// this.http.get(url).pipe(
//   retryWhen(errors =>
//     errors.pipe(
//       delay(2000),
//       take(3)
//     )
//   )
// )

/**
 * HTTP RETRY NOTES
 * -------------------------------------------
 * retry(n):
 * - Automatically retries failed HTTP requests
 * - Useful for temporary network issues
 *
 * retryWhen():
 * - Allows conditional and delayed retries
 * - Used for advanced retry logic
 *
 * Best practice:
 * - Retry only idempotent requests (GET)
 * - Avoid retrying POST blindly
 *
 * Interview tip:
 * - retry is simple
 * - retryWhen gives full control
 */


}
