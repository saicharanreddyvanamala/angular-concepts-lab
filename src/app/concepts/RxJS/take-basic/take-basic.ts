import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, take, tap } from 'rxjs';

@Component({
  selector: 'app-take-basic',
  imports: [],
  templateUrl: './take-basic.html',
  styleUrl: './take-basic.scss',
})
export class TakeBasic implements OnInit, OnDestroy {
  sub!: Subscription;
  // emits: 0,1,2,3,4,5,... every second
  source$ = interval(1000);

  ngOnInit() {
   this.sub = this.source$.pipe(
      take(5), // stop after 5 values
      tap(value => console.log('take() emitted: ', value))
    )
    .subscribe({
      complete: () => console.log('Stream completed because take() reached 5 values')
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
 * RxJS take(n)
 * ------------------------
 * • Emits only the first 'n' values from the source.
 * • After reaching 'n' values, the Observable auto-completes.
 * • Prevents infinite streams from running forever.
 * • Works perfectly with interval(), timer(), user events, etc.
 *
 * Real Use Cases:
 *  - Limit how many times an interval emits
 *  - First value only (take(1))
 *  - Auto-stop polling
 *  - Testing / debugging
 *
 * take() does NOT need Subjects.
 * It is safe for Level 1 of RxJS.
 */

}
