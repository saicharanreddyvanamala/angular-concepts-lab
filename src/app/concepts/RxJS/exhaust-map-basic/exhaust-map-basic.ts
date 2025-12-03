import { Component, OnInit } from '@angular/core';
import { delay, exhaustMap, fromEvent, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-exhaust-map-basic',
  imports: [],
  templateUrl: './exhaust-map-basic.html',
  styleUrl: './exhaust-map-basic.scss',
})
export class ExhaustMapBasic implements OnInit {
  ngOnInit() {
    const btn = document.getElementById('btnLogin')!;

    fromEvent(btn, 'click')
      .pipe(
        map(() => Math.random()),
        tap(num => console.log('CLICK Produced: ', num)),

        //ignore clicks while API is in progress
        exhaustMap(num => {
          console.log('API CALL STARTED');
          return of(`Login Success for: ${num}`).pipe(delay(3000));
        }),
        tap(result => console.log('API RESPONSE: ', result) )
      ).subscribe();
  }

  /**
 * exhaustMap()
 * ----------------------------------------
 * - Accepts ONLY the first emission while the inner observable is running.
 * - Ignores all new values until the inner observable completes.
 * - Prevents double submissions / double login.
 *
 * Perfect For:
 *  - Login button clicks
 *  - Submit button protection
 *  - Payment flows
 *  - OTP resend timer
 *  - Ignoring spammy user clicks
 *
 * Comparison:
 *  switchMap → cancel previous
 *  mergeMap → run all in parallel
 *  concatMap → run sequentially
 *  exhaustMap → ignore new until done
 */

}
