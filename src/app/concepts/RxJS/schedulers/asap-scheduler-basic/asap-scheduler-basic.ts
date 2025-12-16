import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { asapScheduler, observeOn, of } from 'rxjs';

@Component({
  selector: 'app-asap-scheduler-basic',
  imports: [CommonModule],
  templateUrl: './asap-scheduler-basic.html',
  styleUrl: './asap-scheduler-basic.scss',
})
export class AsapSchedulerBasic implements OnInit {

  logs: string[] = [];

  ngOnInit(): void {

    this.logs.push("1. Synchronous Start");

    of("A", "B", "C")
      .pipe(observeOn(asapScheduler))
      .subscribe(v => {
        this.logs.push("asap emission: " + v);
      });

    this.logs.push("2. Synchronous End");

    setTimeout(() => {
      this.logs.push("3. setTimeout (asyncScheduler)");
    });
  }

  /**
 * asapScheduler
 * ------------------------------------------------------------
 * - Runs tasks in the microtask queue (Promise-like).
 * - Executes AFTER synchronous code but BEFORE asyncScheduler.
 *
 * Execution Order:
 * 1. Synchronous JS
 * 2. asapScheduler (microtask)
 * 3. asyncScheduler (macrotask / setTimeout)
 *
 * Use Cases:
 *  - High priority scheduling.
 *  - Run work ASAP but not in the same JS frame.
 *  - Prevent UI blocking while staying fast.
 *  - Avoid race conditions with async tasks.
 *
 * Comparison:
 *  - asapScheduler = microtask queue (fast).
 *  - asyncScheduler = macrotask queue (slower).
 *  - queueScheduler = sync queued FIFO.
 *  - animationFrameScheduler = tied to browser repaint.
 */

}
