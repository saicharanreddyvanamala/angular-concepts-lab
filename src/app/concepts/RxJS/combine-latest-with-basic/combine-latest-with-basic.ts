import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatestWith } from 'rxjs';

@Component({
  selector: 'app-combine-latest-with-basic',
  imports: [CommonModule],
  templateUrl: './combine-latest-with-basic.html',
  styleUrl: './combine-latest-with-basic.scss',
})
export class CombineLatestWithBasic implements OnInit {
  category$ = new BehaviorSubject<string>('Books');
  price$    = new BehaviorSubject<number>(100);

  combined: any[] = [];

  ngOnInit(): void {

    this.category$
      .pipe(
        combineLatestWith(this.price$)  // ⬅️ combine two streams
      )
      .subscribe(([category, price]) => {
        this.combined.push({ category, price });
      });

  }

  changeCategory(v: string) {
    this.category$.next(v);
  }

  changePrice(v: number) {
    this.price$.next(v);
  }

  /**
   *
   * combineLatest → stand-alone creation operator

    combineLatestWith → operator you use inside pipe

    Both produce identical output.
    If you are combining multiple observables in a pipeline → use combineLatestWith

 * combineLatestWith(other$)
 * ------------------------------------------------------------
 * - Emits the latest values from ALL streams whenever ANY
 *   stream emits.
 * - Perfect for building reactive UI state.
 *
 * Requirements:
 *  - All streams must emit at least once before the first output.
 *
 * Use Cases:
 *  - Combine form fields (search + filters).
 *  - Combine route params + query params.
 *  - Combine user role + feature flags.
 *  - Build live state for tables, dashboards, filters.
 *
 * Comparison:
 *  - zip(): pairs emissions by index.
 *  - forkJoin(): waits for all to complete (single emission).
 *  - withLatestFrom(): emits only when main source emits.
 *
 * combineLatestWith is the MOST used stream combination
 * operator in Angular applications.
 */

}
