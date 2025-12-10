import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent, map, tap, timeInterval } from 'rxjs';

@Component({
  selector: 'app-time-interval-basic',
  imports: [CommonModule],
  templateUrl: './time-interval-basic.html',
  styleUrl: './time-interval-basic.scss',
})
export class TimeIntervalBasic implements OnInit {
  logs: any[] = [];

  ngOnInit(): void {

    const btn = document.getElementById('btnTI')!;

    const clicks$ = fromEvent(btn, 'click').pipe(
      timeInterval(),      // measure time between clicks
      tap(v => console.log(v)),
      map(info => ({
        ms: info.interval,
        message: `Time since last click: ${info.interval} ms`
      }))
    );

    clicks$.subscribe(v => this.logs.push(v));
  }

  /**
 * timeInterval()
 * ---------------------------------------------------------
 * - Emits an object containing:
 *     { value: emittedValue, interval: msSinceLastEmission }
 * - Helps measure time gaps between emissions.
 *
 * Use Cases:
 *  - Detect user inactivity.
 *  - Track typing/click speed.
 *  - Measure polling or API response timing.
 *  - Scroll/mousemove analytics.
 *  - Build speed-based logic in games/apps.
 *
 * Output example:
 *   { value: 'A', interval: 400 }
 */


}
