import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { bufferCount, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffercount-basic',
  imports: [CommonModule],
  templateUrl: './buffercount-basic.html',
  styleUrl: './buffercount-basic.scss',
})
export class BuffercountBasic {
batches: any[] = [];

  ngOnInit(): void {
    interval(500).pipe(
      tap(v => console.log("Value:", v)),
      take(10),               // emit total 10 values: 0..9
      bufferCount(3),         // group into batches of 3
    )
    .subscribe(batch => {
      console.log("Batch:", batch);
      this.batches.push(batch);
    });
  }

  /**
 * bufferCount()
 * ---------------------------------------------------------
 * - Collects values until the buffer reaches a fixed size.
 * - Emits the buffered array when the size is reached.
 * - Optional: overlapping or skipping windows.
 *
 * Syntax:
 *   bufferCount(size)
 *   bufferCount(size, startEvery)
 *
 * Examples:
 *   bufferCount(3)
 *     values: 1,2,3,4,5
 *     output: [1,2,3], [4,5]
 *
 *   bufferCount(3,1)  // sliding window
 *     values: 1,2,3,4
 *     output: [1,2,3], [2,3,4]
 *
 * Use Cases:
 *  - Batch processing (API calls)
 *  - Scroll event batching
 *  - Logging in fixed-size windows
 *  - Gesture/mouse movement detection
 *  - Sliding window analytics
 */

}
