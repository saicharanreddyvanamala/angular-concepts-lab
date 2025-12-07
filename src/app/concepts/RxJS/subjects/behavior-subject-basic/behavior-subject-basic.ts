import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'app-behavior-subject-basic',
  imports: [],
  templateUrl: './behavior-subject-basic.html',
  styleUrl: './behavior-subject-basic.scss',
})
export class BehaviorSubjectBasic implements OnInit {
  counter$ = new BehaviorSubject<number>(0);
  ngOnInit(): void {
    // Subscriber 1
    this.counter$.pipe(
      tap(v => console.log('Subscriber 1: ', v))
    ).subscribe();

    // Emit Values
    this.counter$.next(1);
    this.counter$.next(2);

    // Subscriber 2 - subscribes late
    this.counter$.pipe(tap(v => console.log('Subscriber 2 (late): ', v))).subscribe();
  }

  increment() {
    this.counter$.next(this.counter$.value + 1)
  }

  /**
 * BehaviorSubject()
 * ---------------------------------------------
 * - A Subject that stores the latest value.
 * - Requires an initial value.
 * - New subscribers immediately receive the latest value.
 *
 * Perfect For:
 *  - Storing logged-in user
 *  - UI state (theme, sidebar open)
 *  - Search/filter state
 *  - Form values across components
 *  - Any shared state between components
 *
 * Key properties:
 *  - value → get current value
 *  - next() → update state
 *  - asObservable() → expose readonly observable
 *
 * Behavior:
 *  Subscriber 1 gets value every time it changes.
 *  Subscriber 2 gets the latest value immediately on subscription.
 */

}
