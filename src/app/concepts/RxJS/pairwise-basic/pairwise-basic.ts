import { Component, OnInit } from '@angular/core';
import { fromEvent, map, pairwise, tap } from 'rxjs';

@Component({
  selector: 'app-pairwise-basic',
  imports: [],
  templateUrl: './pairwise-basic.html',
  styleUrl: './pairwise-basic.scss',
})
export class PairwiseBasic implements OnInit {
 ngOnInit(): void {
    const btn = document.getElementById('btnPair') as HTMLButtonElement;

    fromEvent(btn, 'click')
      .pipe(
        map(() => Math.floor(Math.random() * 100)),
        pairwise(),
        tap(([prev, curr]) => {
          console.log(`Previous: ${prev}, Current: ${curr}`);
        })
      )
      .subscribe();
  }

  /**
 * pairwise()
 * ---------------------------------------------------------
 * - Emits the previous and current value as a tuple [prev, curr].
 * - Useful when comparing old vs new values.
 * - Does NOT emit until at least 2 values occur.
 *
 * Use Cases:
 *  - Form valueChanges (previous/current)
 *  - Scroll direction detection
 *  - Route change history
 *  - Compare state differences
 *  - Mouse movement difference
 *
 * Example:
 *  values: 1, 2, 3
 *  pairwise emits: [1,2], [2,3]
 */

}
