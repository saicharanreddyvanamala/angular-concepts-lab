import { Component, OnInit } from '@angular/core';
import { delay, of, retryWhen, take, tap } from 'rxjs';

@Component({
  selector: 'app-retry-when-basic',
  imports: [],
  templateUrl: './retry-when-basic.html',
  styleUrl: './retry-when-basic.scss',
})
export class RetryWhenBasic implements OnInit {
    result = '';

  ngOnInit(): void {

    let attempt = 0;

    const source$ = of(null).pipe(
      tap(() => {
        attempt++;
        console.log("Attempt:", attempt);
        if (attempt < 4) throw "Network error!";
      })
    );

    source$.pipe(
      retryWhen(error$ =>
        error$.pipe(
          tap(err => console.log("Retrying in 1 second...")),
          delay(1000),
          take(3) // retry 3 times
        )
      )
    )
    .subscribe({
      next: () => this.result = "Success on attempt " + attempt,
      error: err => this.result = "Failed after retries"
    });

  }

  /**
 * retryWhen(error$ => error$.pipe(...))
 * ------------------------------------------------------------
 * - A powerful retry mechanism that gives FULL control over:
 *      • How many times to retry
 *      • When to retry (delay logic)
 *      • Which errors to retry
 *      • When to stop retrying
 *
 * Example:
 *   retryWhen(error$ => error$.pipe(delay(1000), take(3)))
 *
 * Real Use Cases:
 *  - API retry with delay or exponential backoff.
 *  - WebSocket reconnection loops.
 *  - Retry only certain HTTP error types.
 *  - Graceful retry limit with fallback logic.
 *
 * Notes:
 *  - retryWhen receives an Observable of errors.
 *  - When this inner stream emits → a retry occurs.
 *  - When the inner stream errors → retry stops.
 *  - Can combine delayWhen(), scan(), filter(), etc.
 *
 * retry() = simple retry
 * retryWhen() = professional retry strategy
 */

}
