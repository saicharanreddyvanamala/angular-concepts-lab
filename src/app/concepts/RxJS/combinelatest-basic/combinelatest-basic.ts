import { Component, OnInit } from '@angular/core';
import { combineLatest, fromEvent, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-combinelatest-basic',
  imports: [],
  templateUrl: './combinelatest-basic.html',
  styleUrl: './combinelatest-basic.scss',
})
export class CombinelatestBasic implements OnInit {
  ngOnInit() {
    const input1 = document.getElementById('box1') as HTMLInputElement;
    const input2 = document.getElementById('box2') as HTMLInputElement;

    const stream1$ = fromEvent(input1, 'input').pipe(
      map((e:any) => e.target.value),
    );

    const stream2$ = fromEvent(input2, 'input').pipe(
      map((e:any) => e.target.value),
    );

    combineLatest([stream1$, stream2$])
      .pipe(
        tap(([v1,v2]) => console.log('Combined: ', v1,v2))
      )
      .subscribe();
  }

  /**
 * combineLatest()
 * --------------------------------------------
 * - Emits whenever ANY source observable emits.
 * - Always outputs the LATEST value from ALL streams.
 * - Requires each observable to emit at least once.
 *
 * Typical Use Cases:
 *  - Search + category + sort filters
 *  - Reactive form calculations
 *  - Route param + user settings
 *  - Joining multiple UI streams
 *
 * compare:
 *  forkJoin → waits for all COMPLETE (one-time)
 *  combineLatest → live updates (continuous)
 */

}
