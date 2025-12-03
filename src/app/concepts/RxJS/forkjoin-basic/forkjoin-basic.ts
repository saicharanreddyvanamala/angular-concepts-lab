import { Component, OnInit } from '@angular/core';
import { delay, forkJoin, of, tap } from 'rxjs';

@Component({
  selector: 'app-forkjoin-basic',
  imports: [],
  templateUrl: './forkjoin-basic.html',
  styleUrl: './forkjoin-basic.scss',
})
export class ForkjoinBasic implements OnInit {
  ngOnInit() {
    const api1$ = of('Response 1').pipe(delay(2000));
    const api2$ = of('Response 2').pipe(delay(3000));
    const api3$ = of('Response 3').pipe(delay(1000));

    console.log('Starting All Api Calls...');
    forkJoin([api1$,api2$,api3$])
      .pipe(
        tap(result => console.log('FINAL Result:', result))
      ).subscribe();
  }

  /**
 * forkJoin()
 * ------------------------------------------
 * - Runs multiple Observables in parallel.
 * - Waits until ALL of them complete.
 * - Emits ONE final array/object with results.
 * - Similar to Promise.all().
 *
 * Rules:
 *  - If ANY observable never completes → forkJoin never emits.
 *  - If ANY observable errors → whole forkJoin errors.
 *  - Order is preserved (array index order).
 *
 * Best For:
 *  - Multiple API calls for page load.
 *  - Uploading many files and waiting for all.
 *  - Combining related async work.
 *  - Initialization sequences.
 */

}
