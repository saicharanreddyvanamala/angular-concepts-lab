import { Component, OnInit } from '@angular/core';
import { interval, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-sync-async-basic',
  imports: [],
  templateUrl: './sync-async-basic.html',
  styleUrl: './sync-async-basic.scss',
})
export class SyncAsyncBasic implements OnInit {
  ngOnInit(): void {
    console.log('(A) Before sync observable');

    of(1,2,3)
      .pipe(
        tap(v => console.log('SYNC Emitted: ', v))
      ).subscribe();

      console.log('(B) After sync observable');
      console.log('-----------------------');

      console.log('(C) Before Async observable');

      interval(1000)
        .pipe(
          tap(v => console.log('ASYNC Emitted: ', v)),
          take(5)
        ).subscribe();

        console.log('(D) After Async observable');
  }

  /**
 * Sync vs Async Emissions
 * ----------------------------------------
 * SYNC:
 *   - Emits values immediately during subscribe().
 *   - of(), from(), custom Observables with next().
 *   - Execution happens in same JavaScript tick.
 *
 * ASYNC:
 *   - Emits later (next tick or after delay).
 *   - interval(), timer(), fromEvent(), HTTP.
 *   - Execution happens after current call stack clears.
 *
 * Why important?
 *   - Helps understand valueChanges timing
 *   - Helps avoid change detection bugs
 *   - Explains why interval emits later
 *   - Useful for debugging and predicting behavior
 */

}
