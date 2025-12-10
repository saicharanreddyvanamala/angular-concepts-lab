import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, delay, of, timeout } from 'rxjs';

@Component({
  selector: 'app-timeout-basic',
  imports: [CommonModule],
  templateUrl: './timeout-basic.html',
  styleUrl: './timeout-basic.scss',
})
export class TimeoutBasic {
  result: string = '';

  ngOnInit(): void {

    of("SUCCESS").pipe(
      delay(3000),              // simulates slow API (3 seconds)
      timeout(2000),            // allowed max: 2 seconds
      catchError(err => {
        console.log("Timeout caught:", err);
        return of("TIMED OUT!");
      })
    )
    .subscribe(v => this.result = v);
  }

  /**
 * timeout(ms or config)
 * ---------------------------------------------------------
 * - Throws a TimeoutError if no value is emitted within
 *   the specified time window.
 * - Timer resets after every emission.
 *
 * Example:
 *   http$.pipe(timeout(5000))
 *
 * Use Cases:
 *  - Prevent infinite loading states.
 *  - Detect slow APIs or network delays.
 *  - Protect switchMap inner observables.
 *  - WebSocket heartbeat logic.
 *  - Graceful fallbacks using `with:` option.
 *
 * Syntax:
 *   timeout(3000)
 *   timeout({ first: 3000, each: 1000, with: () => fallback$ })
 *
 * Common Pattern:
 *   source$.pipe(
 *      timeout(2000),
 *      catchError(() => of("Timed Out"))
 *   )
 */

}
