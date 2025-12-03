import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-map-filter-basic',
  imports: [CommonModule],
  templateUrl: './map-filter-basic.html',
  styleUrl: './map-filter-basic.scss',
})
export class MapFilterBasic implements OnInit, OnDestroy {
  sub! : Subscription
  source$ = of(1,2,3,4,5);
  ngOnInit() {

    this.source$.subscribe(value => console.log('Source Value: ', value))
    this.sub = this.source$
      .pipe(
        filter(x => x % 2 === 0),
        map(x => x * 2)
      ).subscribe(
        value => console.log('Output: ', value)
      );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
 * RxJS map() + filter()
 * -----------------------
 * filter(predicate):
 *   - Keeps only values that satisfy condition
 *   - Removes unwanted values (empty, negative, odd, etc.)
 *
 * map(transform):
 *   - Transforms each emitted value
 *   - Like Array.map but for async streams
 *
 * Common use cases:
 *  - Form valueChanges filtering
 *  - Transforming API responses
 *  - UI formatting
 *  - Filtering router events
 *  - Building real-time event processing
 *
 * Execution flow here:
 * Source: 1,2,3,4,5
 * filter → keeps 2,4
 * map → transforms to 20,40
 */

}
