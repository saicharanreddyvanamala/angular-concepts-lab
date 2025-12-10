import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { bufferToggle, fromEvent, interval, tap, timer } from 'rxjs';

@Component({
  selector: 'app-buffertoggle-basic',
  imports: [CommonModule],
  templateUrl: './buffertoggle-basic.html',
  styleUrl: './buffertoggle-basic.scss',
})
export class BuffertoggleBasic implements OnInit{
logs: any[] = [];

  ngOnInit(): void {

    const startBtn = document.getElementById('btnStart')!;
    const start$ = fromEvent(startBtn, 'click');   // opening signal

    const source$ = interval(500).pipe(           // emits every 0.5s
      tap(v => console.log("Source:", v))
    );

    source$.pipe(
      bufferToggle(
        start$,                 // when to start buffer
        () => timer(3000)       // when to stop buffer (3 sec after start)
      )
    )
    .subscribe(buffered => {
      console.log("Buffered:", buffered);
      this.logs.push(buffered);
    });

  }

/**
 * bufferToggle()
 * --------------------------------------------------------
 * - Opens and closes buffers based on custom triggers.
 * - openings$: when to start collecting
 * - closingSelector: when to stop collecting
 *
 * Example:
 *   bufferToggle(start$, () => timer(3000))
 *
 * Use Cases:
 *  - Drag & drop tracking (mousedown → mouseup)
 *  - Dynamic batch windows
 *  - Custom time-ranges
 *  - Interaction analytics
 *  - API request batching
 *  - Event grouping using user interaction
 *
 * Special:
 *  - Multiple buffers can run simultaneously
 *    if openings$ emits multiple times.
 */


}
