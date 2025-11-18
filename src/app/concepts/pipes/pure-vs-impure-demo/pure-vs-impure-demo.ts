import { Component } from '@angular/core';
import { PureUppercasePipe } from '../pure-uppercase.pipe';
import { ImpureUppercasePipe } from '../impure-uppercase.pipe';

@Component({
  selector: 'app-pure-vs-impure-demo',
  imports: [PureUppercasePipe, ImpureUppercasePipe],
  templateUrl: './pure-vs-impure-demo.html',
  styleUrl: './pure-vs-impure-demo.scss',
})
export class PureVsImpureDemo {

  title = 'angular pipes';
  users = ['sai', 'irfan'];

  // mutate array(won't change reference)
  addUserMutating() {
    this.users.push('New User');
  }

  addUserImmutably() {
    this.users = [...this.users, 'New User'];
  }

  changeTitle() {
    this.title = this.title + '!';
  }

  /**
 * ===============================
 * 📌 PIPES & CHANGE DETECTION NOTES
 * ===============================
 *
 * 🔹 Angular runs a Change Detection (CD) cycle whenever:
 *    - a browser event occurs (click, input, submit)
 *    - an async task completes (setTimeout, Promise, Observable)
 *    - HTTP response arrives
 *    - EventEmitter emits
 *
 * 🔹 Pure Pipes (default):
 *    - executed ONLY when the input reference changes
 *    - Angular treats them as "memoized" / cached
 *    - best for performance
 *
 * 🔹 Impure Pipes (pure: false):
 *    - executed on EVERY CD cycle
 *    - CD runs very frequently → pipe runs many times
 *    - Angular also runs impure pipes TWICE:
 *        1. Check phase
 *        2. Verify phase (to detect unstable output)
 *    - avoid unless absolutely necessary
 *
 * 🔹 AsyncPipe:
 *    - subscribes to Observables/Promises
 *    - automatically triggers CD when a new value arrives
 *    - auto-unsubscribes (prevents memory leaks)
 *
 * 🔹 CD + Pipes Rule:
 *    Angular CD → pipes run (based on type)
 *      ✔ Pure Pipe → runs if reference changed
 *      ✔ Impure Pipe → runs on every CD run
 *      ✔ AsyncPipe → runs when observable emits
 *
 * 🔹 Best Practices:
 *    - Prefer Pure Pipes
 *    - Avoid Impure Pipes
 *    - Use AsyncPipe for Observables instead of manual subscribe()
 */




  /**
 * ================================
 * 📌 PIPES — PERFORMANCE NOTES
 * ================================
 *
 * ✔ When Pipes HELP Performance:
 *    - Pure pipes run ONLY when input reference changes.
 *    - Ideal for heavy calculations (sort/filter/map/format).
 *    - Reduce repeated logic inside templates.
 *    - Work perfectly with OnPush CD strategy.
 *
 * ✔ Pure Pipe Advantages:
 *    - Acts like a cached function.
 *    - Runs fewer times compared to template functions.
 *    - Improves performance for large UIs.
 *
 * ❌ When Pipes HURT Performance:
 *    - Impure pipes run on EVERY change detection cycle.
 *    - Angular runs impure pipes twice per CD cycle.
 *    - Doing heavy work in pipes inside ngFor is costly.
 *    - AsyncPipe used directly inside ngFor can trigger multiple re-renders.
 *
 * 🔥 Best Practices:
 *    - Prefer Pure Pipes (default).
 *    - Avoid Impure Pipes unless absolutely needed.
 *    - Never call component methods inside template → use pipes instead.
 *    - Store async data before looping:
 *         <ng-container *ngIf="data$ | async as data">
 *             <div *ngFor="let item of data">...</div>
 *         </ng-container>
 *    - Combine Pure Pipes + OnPush for maximum performance.
 */


  /**
 * 🟦 OnPush + Pipes Best Practices
 *
 * ✔ OnPush tells Angular to run change detection ONLY when:
 *    - @Input reference changes
 *    - Events inside component fire (click, input)
 *    - async pipe emits new value
 *    - cdr.markForCheck() is called
 *
 * ✔ Pure Pipes:
 *    - Re-run only when input reference changes
 *    - Best used when doing heavy calculations
 *    - Perfect with OnPush (very efficient)
 *
 * ✔ Why combine them?
 *    - OnPush reduces CD cycles
 *    - Pure Pipes reduce recalculations
 *    - Together → maximum performance
 *
 * ✔ When to avoid?
 *    - Mutating arrays/objects
 *    - Using impure pipes
 *    - Two-way binding heavy form scenarios
 *
 * ⭐ Golden Rule:
 *    OnPush + AsyncPipe + Pure Pipes + Immutable Data = FAST Angular App 🚀
 */


}
