import { Component } from '@angular/core';
import { Subject, switchMap, takeUntil, tap, timer } from 'rxjs';

@Component({
  selector: 'app-takeuntil-cancel-http',
  imports: [],
  templateUrl: './takeuntil-cancel-http.html',
  styleUrl: './takeuntil-cancel-http.scss',
})
export class TakeuntilCancelHttp {
  search$ = new Subject<string>();
  cancel$ = new Subject<void>();

  constructor(){
    this.search$.pipe(
      tap(q => console.log('Search started: ', q)),
      switchMap(q =>
        timer(2000).pipe( // Fake Http call delay
          tap(() => console.log('HTTP Completed for: ', q)),
          takeUntil(this.cancel$) // <---- cancels pending HTTP if new search arrives
        )
      )
    ).subscribe();
  }

  searchQuery(q: string){
    this.cancel$.next(); // cancel previous request
    this.search$.next(q); // start new request
  }
  /**
 * takeUntil() — Advanced Usage
 * --------------------------------------------------------------
 * - Stops an observable when another observable emits a value.
 * - Used for component cleanup, cancelling HTTP, stopping timers,
 *   switching streams, and controlling stream lifetime.
 *
 * Key advanced patterns:
 *
 * 1. Cancel HTTP requests
 *    search$.pipe(
 *      switchMap(q => http.get(...).pipe(takeUntil(cancel$)))
 *    )
 *
 * 2. Auto-stop infinite streams
 *    interval(1000).pipe(takeUntil(timer(5000)))
 *
 * 3. Stop on user action (stop button)
 *    interval(1000).pipe(takeUntil(fromEvent(stopBtn,'click')))
 *
 * 4. Cleanup on destroy (component-based)
 *    stream$.pipe(takeUntil(destroy$))
 *
 * 5. Cancel inner and outer streams
 *    click$.pipe(
 *      switchMap(() => inner$.pipe(takeUntil(destroy$))),
 *      takeUntil(destroy$)
 *    )
 *
 * Best For:
 *  - Canceling previous actions
 *  - Cleanup
 *  - Controlled lifecycles
 *  - Flow termination
 *  - Prevent memory leaks
 */

}
