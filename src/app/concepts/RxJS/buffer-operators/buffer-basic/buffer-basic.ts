import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { buffer, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-basic',
  imports: [CommonModule],
  templateUrl: './buffer-basic.html',
  styleUrl: './buffer-basic.scss',
})
export class BufferBasic {
  logs: any[] = [];

  ngOnInit(): void {
    const btn = document.getElementById('btnBuffer')!;
    const notifierBtn = document.getElementById('btnFlush')!;

    const clicks$ = fromEvent(btn, 'click');
    const flush$  = fromEvent(notifierBtn, 'click');

    clicks$.pipe(
      buffer(flush$),  // collect clicks until notifier emits
      tap(arr => console.log("Buffered values:", arr)),
    )
    .subscribe(arr => this.logs.push(arr));
  }

  /**
 * buffer()
 * ---------------------------------------------------------
 * - Collects values from the source observable into an array.
 * - Emits the array ONLY when the notifier observable emits.
 * - Then it clears the buffer and starts again.
 *
 * Example:
 *   clicks$.pipe(buffer(flush$))
 *
 * Use Cases:
 *  - Batch user events (keystrokes, clicks)
 *  - API request batching
 *  - Scroll batching
 *  - Drag / gesture handling
 *  - Group values until a trigger occurs
 *
 * Emits pattern:
 *   source:   A --- B --- C --- D --- E
 *   notifier: ----------- X ----------- X
 *   output:        [A,B,C]     [D,E]
 */

}
