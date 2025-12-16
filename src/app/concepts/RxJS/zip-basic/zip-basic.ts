import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, of, zip } from 'rxjs';

@Component({
  selector: 'app-zip-basic',
  imports: [CommonModule],
  templateUrl: './zip-basic.html',
  styleUrl: './zip-basic.scss',
})
export class ZipBasic {
    result: any[] = [];

  ngOnInit(): void {

    const source1$ = of("A", "B", "C");
    const source2$ = of(1, 2, 3).pipe(delay(1000)); // delayed

    zip(source1$, source2$).subscribe(
      ([letter, number]) => {
        this.result.push({ letter, number });
      }
    );

  }

  /**
 * zip(o1, o2, ...)
 * ------------------------------------------------------------
 * - Combines multiple observables by index.
 * - Emits only when each observable has emitted at least once.
 * - Emission order is strictly pairwise:
 *      1st of A + 1st of B
 *      2nd of A + 2nd of B
 *
 * Use Cases:
 *  - Parallel API calls where results belong together.
 *  - Combine timed events with user events.
 *  - Pair streams deterministically.
 *
 * Comparison:
 *  - combineLatest → emits whenever any stream updates.
 *  - forkJoin → waits for all streams to complete once.
 *
 * zip is perfect when pairing is strictly by order.
 */

}
