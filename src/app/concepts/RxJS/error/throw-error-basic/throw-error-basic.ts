import { Component, OnInit } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-throw-error-basic',
  imports: [],
  templateUrl: './throw-error-basic.html',
  styleUrl: './throw-error-basic.scss',
})
export class ThrowErrorBasic implements OnInit {
   result = '';

  ngOnInit(): void {

    const source$ = throwError(() => "Custom Error!");

    source$.pipe(
      catchError(err => {
        console.log("Caught:", err);
        return of("Fallback Value");
      })
    )
    .subscribe(v => this.result = v);

  }

  /**
 * throwError(fn)
 * ------------------------------------------------------------
 * - Creates an observable that immediately throws an error.
 * - Used for converting conditions into RxJS errors.
 * - Required inside pipes, async validators, switchMap logic.
 *
 * Example:
 *   throwError(() => new Error("Something went wrong"))
 *
 * Common Use Cases:
 *  - Re-throw errors from catchError().
 *  - Create custom error conditions in switchMap.
 *  - Fail async validators.
 *  - Stop retryWhen() sequences.
 *  - Transform invalid HTTP responses into real errors.
 *
 * Notes:
 *  - Inside catchError, ALWAYS return an observable,
 *    not a raw error → use throwError().
 *  - Automatically ends the stream unless caught.
 */

}
