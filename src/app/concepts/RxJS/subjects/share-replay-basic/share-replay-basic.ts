import { Component, OnInit } from '@angular/core';
import { delay, of, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-share-replay-basic',
  imports: [],
  templateUrl: './share-replay-basic.html',
  styleUrl: './share-replay-basic.scss',
})
export class ShareReplayBasic implements OnInit {
  // Simulated API call
  apiCall$ = of('DATA FROM SERVER').pipe(
    delay(2000),
    tap(() => console.log('API CALL EXECUTED')),
    shareReplay(1) // <---- IMPORTANT
  );

  ngOnInit(): void {
    console.log('Subscribing #1...');
    this.apiCall$.subscribe(v => console.log('Sub 1: ',v));

    setTimeout(() => {
      console.log('Subscribing #2...');
      this.apiCall$.subscribe(v => console.log('Sub 2: ',v));
    }, 3000);
  }

  /**
 * shareReplay()
 * -------------------------------------------------
 * - Converts a COLD observable into a HOT shared observable.
 * - Caches the last N values (shareReplay(N)).
 * - New subscribers get cached values instantly.
 * - Prevents duplicate HTTP calls.
 * - Great for building Angular data services & caching.
 *
 * Behavior:
 *   API called once → many subscribers receive same result.
 *
 * Best For:
 *  - HTTP caching
 *  - Global state in services
 *  - Shared streams
 *  - Avoiding repeated network/device calls
 *
 * compare:
 *  BehaviorSubject → store state manually
 *  shareReplay     → store values emitted by source observable
 */

}
