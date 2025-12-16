import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { concat, delay, of } from 'rxjs';

@Component({
  selector: 'app-concat-basic',
  imports: [CommonModule],
  templateUrl: './concat-basic.html',
  styleUrl: './concat-basic.scss',
})
export class ConcatBasic implements OnInit {
   output: string[] = [];

  ngOnInit(): void {

    const source1$ = of("A1", "A2", "A3").pipe(delay(500));
    const source2$ = of("B1", "B2").pipe(delay(500));
    const source3$ = of("C1");

    concat(source1$, source2$, source3$).subscribe(value => {
      this.output.push(value);
    });

  }

  /**
 * concat(o1, o2, ...)
 * ------------------------------------------------------------
 * - Runs multiple observables SEQUENTIALLY.
 * - Each observable waits for the previous one to complete.
 * - Useful when ORDER matters.
 *
 * Use Cases:
 *  - Perform multiple API calls in strict order.
 *  - Execute side effects one after another.
 *  - Ordered save → upload → confirm flows.
 *  - Clean replacement for nested callbacks.
 *
 * Comparison:
 *  - merge(): parallel execution.
 *  - zip(): pairs emissions.
 *  - concatMap(): sequential map for emissions.
 *
 * concat ensures predictable, ordered execution.
 */

}
