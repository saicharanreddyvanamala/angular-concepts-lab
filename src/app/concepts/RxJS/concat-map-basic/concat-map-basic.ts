import { Component, OnInit } from '@angular/core';
import { concatMap, delay, fromEvent, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-concat-map-basic',
  imports: [],
  templateUrl: './concat-map-basic.html',
  styleUrl: './concat-map-basic.scss',
})
export class ConcatMapBasic implements OnInit {
  ngOnInit() {
    const btn = document.getElementById('btnClick')!;

    fromEvent(btn, 'click')
      .pipe(
        map(() => Math.random()), // create a request ID
        tap(num => console.log('CLICK prduced: ', num)),

       concatMap(num => {
          console.log("Started processing:", num);
          return of(`Processed: ${num}`).pipe(delay(2000)); // fake async work
        }),
        tap(result => console.log('FINISHED: ', result))
      ).subscribe();
  }

  /**
 * concatMap()
 * ----------------------------------------
 * - Runs inner Observables SEQUENTIALLY.
 * - Each new value waits until previous one completes.
 * - Order is ALWAYS preserved.
 *
 * Perfect for:
 *  - Ordered API calls
 *  - Avoiding race conditions
 *  - Save → Upload → Notify workflows
 *  - Processing multiple events one-by-one
 *
 * Comparison:
 *  switchMap → cancel previous
 *  mergeMap → run in parallel
 *  concatMap → run sequentially (queue)
 *  exhaustMap → ignore new until current done
 */

}
