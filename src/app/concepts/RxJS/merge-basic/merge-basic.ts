import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge-basic',
  imports: [CommonModule],
  templateUrl: './merge-basic.html',
  styleUrl: './merge-basic.scss',
})
export class MergeBasic implements OnInit {
    result: string[] = [];

  ngOnInit(): void {

    const fast$ = interval(500).pipe(
      take(3),
      map(v => `Fast ${v}`)
    );

    const slow$ = interval(1000).pipe(
      take(3),
      map(v => `Slow ${v}`)
    );

    merge(fast$, slow$).subscribe(value => {
      this.result.push(value);
    });

  }

  /**
 * merge(o1, o2, ...)
 * ------------------------------------------------------------
 * - Combines multiple observables in parallel.
 * - Emits a value whenever ANY source observable emits.
 * - Does not wait or pair values (unlike zip).
 * - Continues until ALL streams complete.
 *
 * Use Cases:
 *  - Merge button clicks and keypress events.
 *  - Merge API + cache results.
 *  - Merge WebSocket events into a single stream.
 *  - Merge form field valueChanges.
 *  - Merge async tasks happening simultaneously.
 *
 * Comparison:
 *  - concat(): sequential emissions.
 *  - zip(): pairwise emissions.
 *  - combineLatest(): latest values from all streams.
 *
 * merge() is ideal for "let multiple events flow freely."
 */

}
