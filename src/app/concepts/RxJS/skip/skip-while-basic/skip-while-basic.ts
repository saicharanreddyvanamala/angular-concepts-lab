import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { from, skipWhile, tap } from 'rxjs';

@Component({
  selector: 'app-skip-while-basic',
  imports: [CommonModule],
  templateUrl: './skip-while-basic.html',
  styleUrl: './skip-while-basic.scss',
})
export class SkipWhileBasic implements OnInit {
  result: number[] = [];

    ngOnInit(): void {
      const numbers$ = from([1, 2, 3, 4, 1, 2]);

      numbers$.pipe(
        tap(v => console.log("Emitted:", v)),
        skipWhile(v => v < 4)    // skip until we hit 4
      )
      .subscribe(v => {
        console.log("Received:", v);
        this.result.push(v);
      });
    }

    /**
 * skipWhile(predicate)
 * --------------------------------------------------------
 * - Skips values as long as the predicate is TRUE.
 * - Once predicate becomes FALSE even once,
 *   all future values are emitted (predicate is ignored).
 *
 * Example:
 *   skipWhile(x => x < 4)
 *
 *   values: 1,2,3,4,1,2
 *   output: 4,1,2
 *
 * Use Cases:
 *  - Skip initial form.valueChanges until form fully loads.
 *  - Skip API/WebSocket data until login is done.
 *  - Skip events until threshold reached (scroll, mouse).
 *  - Implement state-machine-like flows.
 *
 * Important:
 *  - This is NOT filtering.
 *  - Predicate is applied only UNTIL the first FALSE.
 *  - After that, everything passes through.
 */

}
