import { Component, OnInit } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Component({
  selector: 'app-subject-basic',
  imports: [],
  templateUrl: './subject-basic.html',
  styleUrl: './subject-basic.scss',
})
export class SubjectBasic implements OnInit {

  notifier$ = new Subject<string>();
  ngOnInit(): void {
    // Subscriber 1
    this.notifier$.pipe(tap(v => console.log('Subscriber 1: ',v))).subscribe();

    // Subscriber 2
    this.notifier$.pipe(tap(v => console.log('Subscriber 2: ', v))).subscribe();
  }

  emitValue() {
    this.notifier$.next("Hello Subject!")
  }

  /**
 * Subject()
 * --------------------------------------------
 * - A Subject is both an Observable and an Observer.
 * - You can subscribe to it AND push values into it.
 * - Unlike normal Observables, Subjects MULTICAST:
 *     One emission → all subscribers receive it.
 *
 * Uses:
 *  - Component communication
 *  - Emit events from services
 *  - UI event streams
 *  - destroy$ cleanup pattern
 *
 * Observable vs Subject:
 *  Observable → unicast (each subscriber = new execution)
 *  Subject    → multicast (one execution for all)
 */




  /**
 * Subject vs Observable
 * -------------------------------------------------------
 * Observable:
 *  - Unicast → each subscriber gets separate execution.
 *  - Cannot manually emit values.
 *  - Used for data sources like HTTP, interval, forms.
 *
 * Subject:
 *  - Multicast → one emission goes to all subscribers.
 *  - Can call next() manually → behaves like an event bus.
 *
 * When to use which:
 *
 * Subject:
 *  - For events (refresh, toggle, click, notify)
 *
 * BehaviorSubject:
 *  - For state (user, filters, theme)
 *  - New subscribers get latest value immediately.
 *
 * ReplaySubject:
 *  - For caching & history (API cache, logs)
 *  - New subscribers get last N values.
 *
 * AsyncSubject:
 *  - For final result only (config load, SDK init)
 *  - Emits last value on complete().
 */

}
