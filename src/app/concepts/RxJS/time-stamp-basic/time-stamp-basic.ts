import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, take, tap, timestamp } from 'rxjs';

@Component({
  selector: 'app-time-stamp-basic',
  imports: [CommonModule],
  templateUrl: './time-stamp-basic.html',
  styleUrl: './time-stamp-basic.scss',
})
export class TimeStampBasic implements OnInit {
   logs: any[] = [];

  ngOnInit(): void {
    interval(700).pipe(
      take(5),
      timestamp(),
      tap(v => console.log(v))
    )
    .subscribe(entry => {
      this.logs.push(entry);
    });
  }

  /**
 * timestamp()
 * ---------------------------------------------------------
 * - Attaches a timestamp (Date.now()) to each emission.
 * - Useful for debugging, analytics, performance monitoring.
 *
 * Example output:
 *   { value: 5, timestamp: 1706812185702 }
 *
 * Use Cases:
 *  - Track exact time of events (clicks, keypress, scroll).
 *  - Measure latency of WebSocket messages.
 *  - Combine with timeInterval() for full timing data.
 *  - Sort or compare events by arrival time.
 *
 * timestamp() vs timeInterval():
 *  - timestamp() → absolute time of emission
 *  - timeInterval() → time between emissions
 */

}
