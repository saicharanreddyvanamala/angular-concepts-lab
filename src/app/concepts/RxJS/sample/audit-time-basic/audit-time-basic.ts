import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { auditTime, interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-audit-time-basic',
  imports: [CommonModule],
  templateUrl: './audit-time-basic.html',
  styleUrl: './audit-time-basic.scss',
})
export class AuditTimeBasic implements OnInit {
   results: number[] = [];

  ngOnInit(): void {

    const source$ = interval(300).pipe(
      tap(v => console.log("Source:", v)),
      take(15)
    );

    source$.pipe(
      auditTime(1000)   // emit LAST value every 1 second
    )
    .subscribe(v => {
      console.log("Audit:", v);
      this.results.push(v);
    });

  }

  /**
 * auditTime(ms)
 * ---------------------------------------------------------
 * - Emits the LAST value from the source only after the
 *   specified time window closes.
 * - Similar to throttleTime, but emits LAST instead of FIRST.
 *
 * Example:
 *   source$.pipe(auditTime(1000))
 *   // every 1 sec → the last value in that window
 *
 * Use Cases:
 *  - Scroll performance optimization
 *  - Resize event stabilization
 *  - Slider / drag movement sampling
 *  - Reduce UI updates for heavy streams
 *
 * Comparison:
 *  - throttleTime → first value
 *  - auditTime → last value (after window)
 *  - sampleTime → latest value at fixed tick
 *  - debounceTime → last value after inactivity
 */

}
