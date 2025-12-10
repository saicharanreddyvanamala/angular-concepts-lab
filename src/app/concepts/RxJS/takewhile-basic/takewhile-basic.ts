import { Component, OnInit } from '@angular/core';
import { interval, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-takewhile-basic',
  imports: [],
  templateUrl: './takewhile-basic.html',
  styleUrl: './takewhile-basic.scss',
})
export class TakewhileBasic implements OnInit {

  ngOnInit(): void {
    interval(1000).pipe(
      tap(v => console.log("Emitted:", v)),
      takeWhile(v => v < 5) // stop when v reaches 5
    )
    .subscribe({
      complete: () => console.log("Stream completed (v reached 5)")
    });
  }

  /**
 * takeWhile()
 * ---------------------------------------------------------
 * - Emits values from the source as long as the condition is TRUE.
 * - As soon as the condition becomes false, the observable COMPLETES.
 * - Opposite of takeUntil (event-based). This is value-based.
 *
 * Usage:
 *   interval(1000).pipe(
 *     takeWhile(v => v < 5)
 *   )
 *
 * Emit: 0,1,2,3,4  then stop.
 *
 * includeLast mode:
 *   takeWhile(v => v < 5, true)
 *   emits: 1,2,3,4,5 (the failing value is included)
 *
 * Use Cases:
 *  - Stop scrolling tracking at a threshold
 *  - Countdown numbers
 *  - Stop animation after N frames
 *  - Form validation watcher until valid
 *  - Stop on value pattern
 *
 * Important:
 *  - Works ONLY based on the source's own values
 *  - No need for additional observable (unlike takeUntil)
 */

}
