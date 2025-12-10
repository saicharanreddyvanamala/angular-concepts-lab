import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, skip, take, tap } from 'rxjs';

@Component({
  selector: 'app-skip-basic',
  imports: [CommonModule],
  templateUrl: './skip-basic.html',
  styleUrl: './skip-basic.scss',
})
export class SkipBasic implements OnInit {
  values: number[] = [];

    ngOnInit(): void {
      interval(500).pipe(
        tap(v => console.log("Emitted:", v)),
        skip(2),    // ignore first 2 values: 0,1
        take(5)     // then take next 5 values: 2,3,4,5,6
      )
      .subscribe(v => {
        console.log("Received:", v);
        this.values.push(v);
      });
    }

    /**
 * skip(n)
 * --------------------------------------------------------
 * - Skips the first 'n' emissions from the source.
 * - After skipping, passes all future values.
 *
 * Example:
 *   interval().pipe(skip(2))
 *   // ignores 0 and 1 → emits 2,3,4...
 *
 * Use Cases:
 *  - Ignore first form.valueChanges emission (initial load)
 *  - Ignore initial combineLatest emission
 *  - Ignore unwanted first event (first click, first scroll)
 *  - Skip default values in streams
 */

}
