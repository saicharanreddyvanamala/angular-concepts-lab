import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { concat, dematerialize, filter, materialize, of, throwError } from 'rxjs';

@Component({
  selector: 'app-dematerialize-basic',
  imports: [CommonModule],
  templateUrl: './dematerialize-basic.html',
  styleUrl: './dematerialize-basic.scss',
})
export class DematerializeBasic {
   output: any[] = [];

  ngOnInit(): void {

    const source$ = concat(
      of(1, 2),
      throwError(() => "Error here")
    );

    source$.pipe(
      materialize(),
      filter(n => n.kind !== 'E'),  // remove errors safely
      dematerialize()
    )
    .subscribe({
      next: v => this.output.push(v),
      error: err => console.log("Stream ends with error:", err),
      complete: () => this.output.push("COMPLETED")
    });
  }

  /**
 * materialize()
 * ---------------------------------------------------------
 * - Converts next/error/complete into Notification objects.
 * - Useful for handling errors WITHOUT breaking stream.
 *
 * Example output:
 *   { kind: 'N', value: 1 }
 *   { kind: 'N', value: 2 }
 *   { kind: 'E', error: 'Oops' }
 *
 * Use Cases:
 *  - Log errors inside pipe.
 *  - Filter out errors or completion events.
 *  - Build custom retry logic.
 *  - Combine error-prone streams safely.
 *
 * dematerialize()
 * ---------------------------------------------------------
 * - Converts Notification objects BACK into real events.
 * - Required after transforming materialized streams.
 *
 * Important:
 *   - If you remove an 'E' event and then dematerialize,
 *     the error never occurs → stream continues.
 */

}
