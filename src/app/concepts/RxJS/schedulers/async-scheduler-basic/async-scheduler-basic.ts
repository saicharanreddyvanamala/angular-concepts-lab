import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { asyncScheduler, observeOn, of } from 'rxjs';

@Component({
  selector: 'app-async-scheduler-basic',
  imports: [CommonModule],
  templateUrl: './async-scheduler-basic.html',
  styleUrl: './async-scheduler-basic.scss',
})
export class AsyncSchedulerBasic implements OnInit {
  logs: string[] = [];

  ngOnInit(): void {
    this.logs.push('1. Synchronous: Start');
    of("A", "B", "C").pipe(
      observeOn(asyncScheduler)
    ).subscribe(v => {
      this.logs.push("Async emission: " + v);
    });

    this.logs.push("2. Synchronous: End");
  }

  /**
 * asyncScheduler
 * ------------------------------------------------------------
 * - Executes tasks asynchronously (like setTimeout).
 * - Used with observeOn() and schedule().
 *
 * Effects:
 *  - Makes synchronous observables emit asynchronously.
 *  - Helps avoid Angular ExpressionChanged errors.
 *  - Allows UI to update before heavy RxJS operations run.
 *
 * Real Use Cases:
 *  - Async validators.
 *  - Decouple emissions from current CD cycle.
 *  - Smooth UI updates.
 *  - Replace setTimeout inside RxJS pipelines.
 *
 * Behavior:
 *  - Adds tasks to the macrotask queue.
 *  - Runs after current JavaScript execution completes.
 */

}
