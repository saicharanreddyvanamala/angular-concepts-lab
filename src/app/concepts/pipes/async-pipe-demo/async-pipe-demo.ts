import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-async-pipe-demo',
  imports: [CommonModule],
  templateUrl: './async-pipe-demo.html',
  styleUrl: './async-pipe-demo.scss',
})
export class AsyncPipeDemo {
  // This emits 0,1,2,3,... every second
  counter$ = interval(1000);


  /*
  --------------------------------------------------------------------
  🧠 ASYNC PIPE — DEEP DIVE NOTES
  --------------------------------------------------------------------

  ✔ WHAT ASYNC PIPE DOES
  ------------------------------------------------
  - Automatically SUBSCRIBES to:
        • Observable
        • Promise
        • Signal (Angular v17+)
  - Automatically UNSUBSCRIBES when the component is destroyed.
  - Prevents memory leaks (no need for ngOnDestroy + manual unsubscribe).
  - Pushes new emitted values directly into the template.

  ✔ HOW IT WORKS INTERNALLY
  ------------------------------------------------
  - When template hits: {{ value$ | async }}
      1. Angular subscribes to the Observable.
      2. Every new emission triggers UI update (change detection).
      3. When component is removed, Angular auto-unsubscribes.

  ✔ WHY ASYNC PIPE TRIGGERS CHANGE DETECTION
  ------------------------------------------------
  - AsyncPipe internally calls:
        changeDetectorRef.markForCheck()
    So even in OnPush components, UI still updates correctly.

  ✔ WHEN ASYNC PIPE RUNS
  ------------------------------------------------
  - On first template render.
  - On every Observable emission.
  - On Promise resolution.
  - On component destruction (cleanup).

  ✔ BEST USE CASES
  ------------------------------------------------
  - HTTP calls with Observables (e.g., http.get())
  - WebSocket or live data streams
  - interval(), timer()
  - BehaviorSubject / ReplaySubject streams
  - When using OnPush Change Detection
  - Replacing manual subscribe() in components (cleaner code)

  ✔ AVOID MANUAL SUBSCRIBE WHEN USING ASYNC PIPE
  ------------------------------------------------
  - Don’t write:
        myObservable.subscribe(...)
    inside component just to show data in UI.

  - Instead, expose observable directly:
        data$ = this.service.getData();
        {{ data$ | async }}

  ✔ PROMISE SUPPORT
  ------------------------------------------------
  - AsyncPipe resolves promises ONCE.
  - After resolving, value is cached and doesn't re-run.

  ✔ MULTIPLE ASYNC PIPES IN SAME TEMPLATE
  ------------------------------------------------
  - Angular handles each subscription independently.
  - Avoid using too many in large repeated lists.

  ✔ IMPORTANT PERFORMANCE NOTE
  ------------------------------------------------
  - If you have expensive Observables emitting very frequently,
    AsyncPipe may cause frequent UI updates.
  - In such cases, use:
        • throttleTime()
        • debounceTime()
        • distinctUntilChanged()

  ✔ RULE OF THUMB
  ------------------------------------------------
  - Use AsyncPipe for ALL display-only observable data.
  - Use manual subscribe ONLY:
        • when side effects are needed (saving to localStorage, etc.)
        • when you want to chain multiple observables inside TS
        • when the value will not be shown in the template

  --------------------------------------------------------------------
*/

}
