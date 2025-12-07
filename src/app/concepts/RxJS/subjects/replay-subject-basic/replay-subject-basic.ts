import { Component, OnInit } from '@angular/core';
import { ReplaySubject, tap } from 'rxjs';

@Component({
  selector: 'app-replay-subject-basic',
  imports: [],
  templateUrl: './replay-subject-basic.html',
  styleUrl: './replay-subject-basic.scss',
})
export class ReplaySubjectBasic implements OnInit {

  // Buffer size 3 -> store last 3 values
  event$ = new ReplaySubject<string>(3);

  ngOnInit(): void {
    // Emit some values
    this.event$.next('Event 1');

    this.event$.pipe(
      tap(val => console.log('Early Subscriber: ', val))
    ).subscribe();

    this.event$.next('Event 2');
    this.event$.next('Event 3');
    this.event$.next('Event 4');
    this.event$.next('Event 5');

    this.event$.pipe(
      tap(val => console.log('Late Subscriber: ', val))
    ).subscribe();
  }

  /**
 * ReplaySubject()
 * ---------------------------------------------
 * - Like BehaviorSubject but stores MULTIPLE past values.
 * - Replays past values to new subscribers.
 * - Does NOT require an initial value.
 *
 * Good For:
 *  - Caching API results
 *  - Replaying events to late subscribers
 *  - Notification history
 *  - Debug/event logs
 *  - Multi-step form wizard state
 *
 * compare:
 *  BehaviorSubject → remembers ONE latest value
 *  ReplaySubject   → remembers MANY latest values
 */

}
