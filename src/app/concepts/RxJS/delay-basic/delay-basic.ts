import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-delay-basic',
  imports: [CommonModule],
  templateUrl: './delay-basic.html',
  styleUrl: './delay-basic.scss',
})
export class DelayBasic {
   messages: any[] = [];

  ngOnInit(): void {
    of("A", "B", "C").pipe(
      tap(v => console.log("Before delay:", v)),
      delay(2000),
      tap(v => console.log("After delay:", v))
    )
    .subscribe(v => this.messages.push(v));
  }

  /**
 * delay(ms)
 * ---------------------------------------------------------
 * - Delays *every* emission from source by a fixed time.
 * - Order is preserved.
 * - Completion and errors are also delayed.
 *
 * Example:
 *   of('A','B','C').pipe(delay(2000))
 *   // All values emit 2 seconds later.
 *
 * Use Cases:
 *  - Simulate network latency.
 *  - UI/UX animations.
 *  - Prevent flashes by delaying showing/hiding elements.
 *  - Retry backoff when combined with retryWhen().
 *  - Sequential UI steps and message timing.
 *
 * Note:
 *  - delay() shifts the entire stream — it does NOT
 *    space out values by the delay.
 */

}
