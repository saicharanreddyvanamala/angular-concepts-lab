import { Component, OnInit } from '@angular/core';
import { fromEvent, map, scan, tap } from 'rxjs';

@Component({
  selector: 'app-scan-basic',
  imports: [],
  templateUrl: './scan-basic.html',
  styleUrl: './scan-basic.scss',
})
export class ScanBasic implements OnInit {
 count = 0;

  ngOnInit(): void {
    const btn = document.getElementById('btnScan') as HTMLButtonElement;

    fromEvent(btn, 'click')
      .pipe(
        map(() => 1),                // every click = +1
        scan((acc, curr) => acc + curr, 0),  // accumulate count
        tap(v => console.log("Current count:", v))
      )
      .subscribe((v) => this.count = v);
  }

  /**
 * scan()
 * ---------------------------------------------------------
 * - Like reduce(), but emits every intermediate accumulated value.
 * - Maintains internal state within the observable chain.
 * - Perfect for counters, lists, stores, history tracking.
 *
 * Example:
 *   scan((acc, curr) => acc + curr, 0)
 *   values: 1,2,3,4
 *   emits: 1,3,6,10
 *
 * Use Cases:
 *  - mini NgRx store
 *  - accumulate form values
 *  - running totals (cart total)
 *  - chat message feed
 *  - undo/redo history
 *  - scroll/position tracking
 *
 * scan = reduce but reactive/incremental.
 */

}
