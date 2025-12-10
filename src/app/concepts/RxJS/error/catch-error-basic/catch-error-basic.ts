import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error-basic',
  imports: [CommonModule],
  templateUrl: './catch-error-basic.html',
  styleUrl: './catch-error-basic.scss',
})
export class CatchErrorBasic implements OnInit {
  message = '';

  ngOnInit(): void {
    const source$ = throwError(() => 'Something went wrong!');

    source$.pipe(
      catchError(err => {
        console.log('Caught Error: ', err);
        return of('Handled Error Successfully!');
      }
      )
    ).subscribe(v => this.message = v);
  }

  /**
 * catchError(fn)
 * ---------------------------------------------------------
 * - Catches errors INSIDE the observable pipe.
 * - Prevents the stream from breaking.
 * - Must return a new observable (fallback or rethrow).
 *
 * Example:
 *   catchError(err => of("Fallback value"))
 *
 * Common Use Cases:
 *  - Handle HTTP errors (404, 500, network failure).
 *  - Show toast messages on failure.
 *  - Provide fallback UI data.
 *  - Log errors and continue stream.
 *  - Combine with retry / retryWhen.
 *
 * Important:
 *  - Must return an observable.
 *  - If you want the error to continue downstream,
 *    use: throwError(() => err).
 *
 * catchError replaces the *source observable* from the point
 * where the error occurs.
 */

}
