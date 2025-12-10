import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delayWhen, of, tap, timer } from 'rxjs';

@Component({
  selector: 'app-delay-when-basic',
  imports: [CommonModule],
  templateUrl: './delay-when-basic.html',
  styleUrl: './delay-when-basic.scss',
})
export class DelayWhenBasic implements OnInit {
  logs: any[] = [];

  ngOnInit(): void {
    of(1,2,3).pipe(
      delayWhen(num => timer(num * 1000)), // delay per value
      tap(v => console.log("Emitted after delay: ",v))
    ).subscribe(v => this.logs.push(v))
  }

  /**
 * delayWhen(selector)
 * ---------------------------------------------------------
 * - Delays each emission using a custom observable.
 * - The selector is called for each value.
 * - The returned observable determines the delay duration.
 *
 * Example:
 *   delayWhen(v => timer(v * 1000))
 *   // value=1 → 1s delay
 *   // value=2 → 2s delay
 *
 * Use Cases:
 *  - Stagger animations (list entry effects)
 *  - Progressive loading patterns
 *  - Value-based delay logic
 *  - Retry backoff strategies
 *  - Conditional timing (premium vs non-premium users)
 *  - Complex UI sequences
 *
 * Differences:
 *  - delay() → fixed delay
 *  - delayWhen() → dynamic, value-specific delay
 */

}
