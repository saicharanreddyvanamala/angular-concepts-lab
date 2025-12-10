import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { bufferTime, interval, map, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffertime-basic',
  imports: [CommonModule],
  templateUrl: './buffertime-basic.html',
  styleUrl: './buffertime-basic.scss',
})
export class BuffertimeBasic implements OnInit {

   batches: any[] = [];

  ngOnInit(): void {
    interval(400).pipe(              // emits every 0.4s
      map(v => `Val-${v}`),
      tap(v => console.log("Emitted:", v)),
      take(10),                      // only 10 values for demo
      bufferTime(1500)               // collect for 1.5 seconds
    )
    .subscribe(batch => {
      console.log("Batch:", batch);
      this.batches.push(batch);
    });
  }

  /**
 * bufferTime()
 * ---------------------------------------------------------
 * - Collects values for a specified time window.
 * - Emits buffered array at the end of each window.
 * - Can specify:
 *     bufferTimeSpan (duration)
 *     bufferCreationInterval (for overlapping windows)
 *     maxBufferSize (flush early)
 *
 * Examples:
 *   bufferTime(2000)
 *     → emits values collected every 2 seconds
 *
 *   bufferTime(2000, 1000)
 *     → new window every 1 second, each window lasts 2 seconds
 *
 * Use Cases:
 *  - Scroll / mousemove batching
 *  - Auto-save form data
 *  - Throttling API calls
 *  - Analytics (events per time window)
 *  - Sliding window computations
 */

}
