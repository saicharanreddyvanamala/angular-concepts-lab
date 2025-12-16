import { Component, OnInit } from '@angular/core';
import { of, retry, tap } from 'rxjs';

@Component({
  selector: 'app-retry-basic',
  imports: [],
  templateUrl: './retry-basic.html',
  styleUrl: './retry-basic.scss',
})
export class RetryBasic implements OnInit{
    result: string = '';

  ngOnInit(): void {

    let attempt = 0;

    const source$ = of(null).pipe(
      tap(() => {
        attempt++;
        console.log("Attempt:", attempt);

        if (attempt < 3) {
          throw "Error triggered!";
        }
      })
    );

    source$.pipe(
      retry(2)  // retry twice after original failure
    )
    .subscribe({
      next: () => this.result = "Success on attempt " + attempt,
      error: err => this.result = "Failed after retries"
    });

  }

  /**
 * retry(n)
 * ------------------------------------------------------------
 * - Re-subscribes to the source observable when an error occurs.
 * - Allows a fixed number of retry attempts.
 *
 * Example:
 *   retry(3)  // original + 3 retry attempts
 *
 * Common Use Cases:
 *  - Retry HTTP GET requests on network failures.
 *  - Retry WebSocket reconnections.
 *  - Retry failed async validators.
 *  - Stabilize UI when backend API is temporarily down.
 *
 * Best Practices:
 *  - Use retry() ONLY for idempotent operations (GET).
 *  - Always place retry() BEFORE catchError().
 *  - For delayed retries or conditional retries,
 *    use retryWhen().
 *
 * Internally:
 *  - retry cancels the failed subscription and creates a new one.
 *  - After max retries → throws error.
 */

}
