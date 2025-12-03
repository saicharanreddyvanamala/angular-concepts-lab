import { Component, OnInit } from '@angular/core';
import { fromEvent, map, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time-basic',
  imports: [],
  templateUrl: './throttle-time-basic.html',
  styleUrl: './throttle-time-basic.scss',
})
export class ThrottleTimeBasic implements OnInit {
 ngOnInit(): void {
    const btn = document.getElementById('btnClick')!;

    fromEvent(btn, 'click')
      .pipe(
        tap(() => console.log("BUTTON CLICKED")),
        throttleTime(2000), // 2 seconds window
        tap(() => console.log("THROTTLED: Event passed"))
      )
      .subscribe();
  }

  /**
 * throttleTime(ms)
 * ----------------------------------------
 * - Emits the FIRST value immediately.
 * - Ignores all other values until the time window ends.
 * - Useful for frequent events: scroll, mousemove, clicks.
 *
 * Behavior:
 * Clicks: A-B-C-D---E
 * throttle(2000) → A---E
 *
 * debounceTime vs throttleTime:
 *   debounceTime → wait until user stops
 *   throttleTime → emit first, ignore the rest
 *
 * Real Uses:
 *  - Prevent double click submit
 *  - Optimize scroll/resize performance
 *  - Rate limit high-frequency events
 */
}
