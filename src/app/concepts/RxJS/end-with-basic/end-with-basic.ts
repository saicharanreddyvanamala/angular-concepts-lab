import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { delay, endWith, interval, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-end-with-basic',
  imports: [CommonModule],
  templateUrl: './end-with-basic.html',
  styleUrl: './end-with-basic.scss',
})
export class EndWithBasic {
  result$ = interval(1000).pipe(
    take(5),
    endWith('Count Ends'),
    tap(v => console.log('Count: ', v)),
  )

  /**
 * endWith()
 * ---------------------------------------------------------
 * - Appends one or more values AFTER the source completes.
 * - Works only if the source observable completes.
 *
 * Use Cases:
 *  - Show "Finished" or "Done" after steps
 *  - Add final summary at end of data stream
 *  - Append final UI message
 *  - Mark end of async workflows
 *
 * Example:
 *   of(1, 2, 3).pipe(endWith(4))
 *   emits: 1, 2, 3, 4
 *
 * Important:
 *  interval(), Subjects, or infinite streams never complete,
 *  so endWith() will never fire.
 */

}
