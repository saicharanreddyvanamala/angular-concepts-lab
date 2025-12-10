import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fromEvent, interval, sample, tap } from 'rxjs';

@Component({
  selector: 'app-sample-basic',
  imports: [CommonModule],
  templateUrl: './sample-basic.html',
  styleUrl: './sample-basic.scss',
})
export class SampleBasic {

    sampledValues: number[] = [];

  ngOnInit(): void {

    const source$ = interval(500).pipe(   // emits every 0.5s
      tap(v => console.log("Source:", v))
    );

    const btn = document.getElementById('btnSample')!;
    const btnClick$ = fromEvent(btn, 'click');  // notifier

    source$.pipe(
      sample(btnClick$)
    )
    .subscribe(v => {
      console.log("Sampled:", v);
      this.sampledValues.push(v);
    });

  }

  /**
 * sample(notifier$)
 * ---------------------------------------------------------
 * - Emits the latest value from source$ whenever notifier$
 *   emits.
 * - If source has not emitted since last sample, nothing is emitted.
 *
 * Timeline:
 *   source$:   --A---B-C----D---
 *   notifier$: ------x------x---
 *   output:        B         D
 *
 * Use Cases:
 *  - Get latest form value when user clicks Save.
 *  - Snapshot mouse/scroll position.
 *  - Emit state only when UI asks for it.
 *  - Pull-based rendering patterns.
 *
 * Differences:
 *  - sample() → emits when notifier$ triggers
 *  - throttleTime → emits at interval
 *  - debounceTime → emits after inactivity
 */

}
