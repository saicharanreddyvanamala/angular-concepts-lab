import { Component, OnInit } from '@angular/core';
import { of, reduce, tap } from 'rxjs';

@Component({
  selector: 'app-reduce-basic',
  imports: [],
  templateUrl: './reduce-basic.html',
  styleUrl: './reduce-basic.scss',
})
export class ReduceBasic implements OnInit {
  total =0;
  ngOnInit(): void {
    of(10,20,30,40,50).pipe(
      tap(v => console.log('Value: ', v)),
      reduce((acc, curr) => acc + curr, 0) // Final output
    ).subscribe( finalValue => {
      console.log('Final Output: ', finalValue);
      this.total = finalValue;
    }
    )
  }

  /**
 * reduce()
 * ---------------------------------------------------------
 * - Like Array.reduce(), but for Observables.
 * - Accumulates values over time and emits ONLY ONE final result.
 * - Works only if the observable completes.
 *
 * Example:
 *   reduce((acc, curr) => acc + curr, 0)
 *
 * values: 10,20,30
 * emits: 60 (only once)
 *
 * Use Cases:
 *  - Cart totals
 *  - Batch processing summary
 *  - Collect/aggregate API responses
 *  - Summaries after take(n)
 *
 * Note:
 *  Infinite observables (interval, Subjects) NEVER trigger reduce()
 */

}
