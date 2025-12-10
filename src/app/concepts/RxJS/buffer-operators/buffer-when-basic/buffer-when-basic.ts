import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { bufferWhen, interval, take, tap, timer } from 'rxjs';

@Component({
  selector: 'app-buffer-when-basic',
  imports: [CommonModule],
  templateUrl: './buffer-when-basic.html',
  styleUrl: './buffer-when-basic.scss',
})
export class BufferWhenBasic implements OnInit {

 batches: any[] = [];

  ngOnInit(): void {
    interval(500).pipe(
      tap(v => console.log("Value:", v)),
      take(12),                        // only 12 values for the demo
      bufferWhen(() => timer(3000))    // close buffer every 3 seconds
    )
    .subscribe(batch => {
      console.log("Batch:", batch);
      this.batches.push(batch);
    });
  }

  /**
 * bufferWhen()
 * ---------------------------------------------------------
 * - Opens a buffer immediately.
 * - Closes the buffer whenever the closing observable emits.
 * - Automatically starts a new buffer after closing.
 *
 * Syntax:
 *   bufferWhen(() => closingObservable)
 *
 * Example:
 *   bufferWhen(() => timer(3000))
 *   -> buffer closes every 3 seconds
 *
 * Differences:
 *  - buffer(): uses fixed notifier
 *  - bufferCount(): count based
 *  - bufferTime(): time based
 *  - bufferToggle(): you control open + close
 *  - bufferWhen(): auto open, custom close
 *
 * Use Cases:
 *  - Log batching
 *  - Auto-save logic
 *  - State snapshots
 *  - Periodic sampling
 *  - Event grouping with dynamic intervals
 */

}
