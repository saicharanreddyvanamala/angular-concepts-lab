import { Component, OnInit } from '@angular/core';
import { fromEvent, map, startWith, tap, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-withlatestfrom-basic',
  imports: [],
  templateUrl: './withlatestfrom-basic.html',
  styleUrl: './withlatestfrom-basic.scss',
})
export class WithlatestfromBasic implements OnInit {
  ngOnInit(): void {
    const input = document.getElementById('textInput') as HTMLInputElement;
    const btn = document.getElementById('btnSubmit') as HTMLButtonElement;

    const text$ = fromEvent(input, 'input').pipe(
      map((e:any) => e.target.value),
    );

    const click$ = fromEvent(btn, 'click');

    click$.pipe(
      withLatestFrom(text$),
      tap(([_,text]) => console.log('Submit clicked with text: ', text))
    ).subscribe();
  }

  /**
 * withLatestFrom()
 * ----------------------------------------
 * - Combines source observable with latest values from other observables.
 * - Emits ONLY when the source (main) observable emits.
 * - Unlike combineLatest, supporting streams do NOT trigger output.
 *
 * Best For:
 *  - Button click + latest form value
 *  - Submit events + latest filters
 *  - API trigger + latest auth token
 *  - Actions that require current state
 *
 * Behavior:
 *  source$ → triggers output
 *  other$ → provides latest value
 */

}
