import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, skipUntil, tap } from 'rxjs';

@Component({
  selector: 'app-skip-until-basic',
  imports: [CommonModule],
  templateUrl: './skip-until-basic.html',
  styleUrl: './skip-until-basic.scss',
})
export class SkipUntilBasic implements OnInit {
    results: number[] = [];

  ngOnInit(): void {

    const startBtn = document.getElementById('btnStart')!;

    const source$ = interval(500).pipe(
      tap(v => console.log("Source:", v))
    );

    const start$ = fromEvent(startBtn, 'click'); // trigger

    source$.pipe(
      skipUntil(start$)   // ignore until button clicked
    )
    .subscribe(v => {
      console.log("Received:", v);
      this.results.push(v);
    });
  }

/**
 * skipUntil(trigger$)
 * --------------------------------------------------------
 * - Skips all values from the source until the trigger$
 *   emits its first value.
 * - After trigger emits, source values flow normally.
 *
 * Example:
 *   interval().pipe(skipUntil(buttonClick$))
 *
 * Use Cases:
 *  - Start a stream only after user interaction.
 *  - Wait for API load before processing data.
 *  - Wait for login before allowing events.
 *  - Delay form.valueChanges until form initialized.
 *  - Start WebSocket message handling after connected.
 *
 * Important:
 *  - trigger$'s first emission opens the gate.
 *  - Gate never closes again.
 */

}
