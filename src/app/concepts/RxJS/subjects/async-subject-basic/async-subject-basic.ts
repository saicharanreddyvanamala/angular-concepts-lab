import { Component, OnInit } from '@angular/core';
import { AsyncSubject, tap } from 'rxjs';

@Component({
  selector: 'app-async-subject-basic',
  imports: [],
  templateUrl: './async-subject-basic.html',
  styleUrl: './async-subject-basic.scss',
})
export class AsyncSubjectBasic implements OnInit {
  result$ = new AsyncSubject<number>();

  ngOnInit(): void {

    // Subscriber 1
    this.result$.pipe(
      tap(v => console.log('Subscriber 1: ',v))
    ).subscribe();

    this.result$.next(10);
    this.result$.next(20);
    this.result$.next(30);

    // Subscriber 2 (Late)
    this.result$.pipe(
      tap(v => console.log('Subscriber 2: ', v))
    ).subscribe();

    // ONLY after complete() -> async subject emits final value (30)
    this.result$.complete();
  }

  /**
 * AsyncSubject()
 * ----------------------------------------------------
 * - Emits ONLY the LAST value.
 * - Emits that value ONLY when complete() is called.
 * - All subscribers get the same final value.
 *
 * Behavior:
 *   next(10)
 *   next(20)
 *   next(30)
 *   complete()
 *   → emits ONLY 30 to all subscribers
 *
 * Perfect For:
 *  - Loading config before app starts
 *  - One-time API calls with caching
 *  - Lazy initialization (Firebase, Stripe, Maps)
 *  - Final result emission after long process
 *
 * compare:
 *   Subject → events
 *   BehaviorSubject → latest state
 *   ReplaySubject → history
 *   AsyncSubject → final value only
 */

}
