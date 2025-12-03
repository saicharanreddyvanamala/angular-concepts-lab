import { Component, OnInit } from '@angular/core';
import { delay, fromEvent, map, mergeMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-merge-map-basic',
  imports: [],
  templateUrl: './merge-map-basic.html',
  styleUrl: './merge-map-basic.scss',
})
export class MergeMapBasic implements OnInit {
  ngOnInit() {
    const btn = document.getElementById('btnClick')!;

    fromEvent(btn, 'click')
      .pipe(
        map(() => Math.random()), // random number for each click
        tap(num => console.log('CLICK produced: ', num)),

        // mergeMap: start ALL inner observables
        mergeMap(num =>
          of(`Processed: ${num}`).pipe(delay(1000))
        ),
        tap(result => console.log('Output: ', result))
      ).subscribe();
  }

  /**
 * mergeMap()
 * ----------------------------------------
 * - Starts ALL inner observables.
 * - No cancellation of previous work.
 * - Perfect for parallel async tasks.
 * - Order of emissions is NOT guaranteed.
 *
 * Example:
 * clicks → mergeMap → API calls
 * Every click triggers a new API call.
 *
 * Best For:
 *  - Multiple file uploads
 *  - Parallel HTTP requests
 *  - Mouse click/scroll events
 *  - WebSocket message processing
 *
 * Comparison:
 *  switchMap → cancel previous
 *  mergeMap → run all
 *  concatMap → run sequentially
 *  exhaustMap → ignore new until complete
 */

}
