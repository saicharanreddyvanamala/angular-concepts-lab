import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, map, startWith, tap } from 'rxjs';

@Component({
  selector: 'app-start-with-basic',
  imports: [CommonModule],
  templateUrl: './start-with-basic.html',
  styleUrl: './start-with-basic.scss',
})
export class StartWithBasic {
  counter$ = interval(1000).pipe(
    map(v => v +1),
    startWith(0),
    tap(v =>console.log('Counter: ', v))
  );

  /**
 * startWith()
 * ---------------------------------------------------------
 * - Add an initial value to an observable.
 * - First emission happens immediately, before the source.
 * - Useful for bootstrapping streams that have no initial value.
 *
 * Why:
 *  - Avoid undefined in templates
 *  - Make combineLatest start working immediately
 *  - Provide default UI state
 *  - Simulate BehaviorSubject initial behavior
 *
 * Example:
 *   interval(1000).pipe(
 *     map(x => x + 1),
 *     startWith(0)
 *   )
 *
 * Emits:
 *   0, 1, 2, 3,...
 */

}
