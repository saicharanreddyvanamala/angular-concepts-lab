import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-destroy-pattern',
  imports: [],
  templateUrl: './destroy-pattern.html',
  styleUrl: './destroy-pattern.scss',
})
export class DestroyPattern implements OnInit, OnDestroy {
  destroy$ = new Subject<void>;

  ngOnInit(): void {
    interval(1000)
      .pipe(
        tap(v => console.log('Interval: ', v)),
        takeUntil(this.destroy$)
      ).subscribe();
  }

  ngOnDestroy(): void {
    console.log('Component Destroyed. Cleaning streams...');
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
 * destroy$ + takeUntil()
 * -------------------------------------------------------
 * - Angular does NOT auto-unsubscribe from most observables.
 * - Streams like interval(), valueChanges, route params, sockets
 *   continue forever unless stopped.
 *
 * destroy$ Pattern:
 *   destroy$ = new Subject<void>();
 *
 *   obs$.pipe(takeUntil(destroy$)).subscribe();
 *
 *   ngOnDestroy() {
 *     destroy$.next();
 *     destroy$.complete();
 *   }
 *
 * Why:
 *  - Prevent memory leaks
 *  - Stop background streams
 *  - Avoid duplicate subscriptions
 *  - Clean up long-running observables
 *
 * Use for:
 *  - interval(), timer()
 *  - Subject/BehaviorSubject streams
 *  - form.valueChanges
 *  - route.params or data
 *  - combineLatest / switchMap chains
 *  - window events (scroll, resize)
 */

}
