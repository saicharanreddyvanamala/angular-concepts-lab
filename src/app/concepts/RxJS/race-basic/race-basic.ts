import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, race, timer } from 'rxjs';

@Component({
  selector: 'app-race-basic',
  imports: [CommonModule],
  templateUrl: './race-basic.html',
  styleUrl: './race-basic.scss',
})
export class RaceBasic implements OnInit {
  result: string[] = [];

  ngOnInit(): void {

    const fast$ = timer(100).pipe(map(() => 'Fast stream'));
    const medium$ = timer(500).pipe(map(() => 'Medium stream'));
    const slow$ = timer(1000).pipe(map(() => 'Slow stream'));

    race(fast$, medium$, slow$).subscribe(value => {
      this.result.push(value);
    });
  }

  /**
 * race(o1, o2, ...)
 * ------------------------------------------------------------
 * - Subscribes to all observables but only the FIRST one to emit wins.
 * - Cancels all other observables.
 *
 * Similar to:
 *   "Whichever observable emits first, use that one."
 *
 * Use Cases:
 *  - Timeouts: race(API, timer).
 *  - Multiple data sources (cache vs API).
 *  - Competing UI events (first click wins).
 *  - Cancel slow operations if a faster one resolves.
 *
 * Differences:
 *  - merge(): all observables emit.
 *  - concat(): emit sequentially.
 *  - race(): only FIRST observable emits.
 *
 * race() ends the moment another observable emits first.
 */

}
