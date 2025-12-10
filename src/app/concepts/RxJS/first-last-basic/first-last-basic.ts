import { Component, OnInit } from '@angular/core';
import { first, from, last, tap } from 'rxjs';

@Component({
  selector: 'app-first-last-basic',
  imports: [],
  templateUrl: './first-last-basic.html',
  styleUrl: './first-last-basic.scss',
})
export class FirstLastBasic implements OnInit {
  ngOnInit() {
    const source$ = from([1,2,3,4]);

    // FIRST VALUE
    source$.pipe(
      first(),
      tap(v => console.log('FIRST value Emitted: ', v)),
    ).subscribe();

    // LAST VALUE
    source$.pipe(
      last(),
      tap(v => console.log('LAST value Emitted: ', v))
    ).subscribe();
  }

  /**
 * first()
 * ---------------------------------------------------------
 * - Emits ONLY the first value, then completes automatically.
 * - Can take a condition predicate to return the first matching value.
 * - Prevents memory leaks because subscription ends immediately.
 *
 * Examples:
 *   source$.pipe(first())
 *   source$.pipe(first(v => v > 10))
 *   source$.pipe(first(v => v > 10, { defaultValue: 'none' }))
 *
 * Use Cases:
 *  - One-time events (first click, first valueChange)
 *  - Wait for first data from a service
 *  - First router navigation end
 *  - Polling until something becomes valid
 *  - Observables that should behave like promises
 *
 * Difference vs take(1):
 *  - first() supports predicate + default values
 *  - take(1) does not
 */


  /**
 * last()
 * ---------------------------------------------------------
 * - Emits ONLY the last value from a finite observable.
 * - Waits until the observable COMPLETES.
 * - Can take a predicate to return the last matching value.
 * - Throws EmptyError if no matching value (unless default provided).
 *
 * Examples:
 *   last()
 *   last(v => v % 2 === 0)
 *   last(v => v > 100, { defaultValue: 'none' })
 *
 * Use Cases:
 *  - Get final event/state
 *  - Polling until job is done
 *  - Multi-step workflows (last event)
 *  - Extract last form change before submit
 *  - Final price / summary calculation
 *
 * Important:
 *  last() does NOT work on infinite streams
 *  unless paired with take() / takeWhile() etc.
 */

}
