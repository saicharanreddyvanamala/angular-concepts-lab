import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { delay, finalize, of } from 'rxjs';

@Component({
  selector: 'app-finalize-basic',
  imports: [CommonModule],
  templateUrl: './finalize-basic.html',
  styleUrl: './finalize-basic.scss',
})
export class FinalizeBasic implements OnInit {
  loading = false;
  message = '';

  ngOnInit(): void {

    this.loading = true;

    of("Data loaded!")
      .pipe(
        delay(2000),
        finalize(() => {
          console.log("Finalize executed!");
          this.loading = false;
        })
      )
      .subscribe(result => this.message = result);
  }

  /**
 * finalize(callback)
 * ------------------------------------------------------------
 * - Runs the callback when observable ends:
 *      • on complete
 *      • on error
 *      • on unsubscribe
 *
 * Use Cases:
 *  - Hide loading spinners in Angular.
 *  - Cleanup resources (intervals, timers, sockets).
 *  - Close dialogs after API calls.
 *  - Logging end of observable lifecycle.
 *
 * Differences:
 *  - tap() runs DURING emission.
 *  - finalize() runs AFTER observable ends.
 *
 * Important:
 *  - finalize always executes regardless of success/error.
 *  - perfect for loader=false patterns.
 */

}
