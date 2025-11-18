import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, Subject } from 'rxjs';

@Component({
  selector: 'app-reactive-pipe-demo',
  imports: [CommonModule],
  templateUrl: './reactive-pipe-demo.html',
  styleUrl: './reactive-pipe-demo.scss',
})
export class ReactivePipeDemo {
  // A subject where input values will go
  searchInput$ = new Subject<string>();

  // A reactive stream derived from the input stream
  result$ = this.searchInput$.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    map(text => text.toUpperCase()) // transform text
  );

  updateSearch(text: string) {
    this.searchInput$.next(text);
  }

  /*
  --------------------------------------------------------------------
  🧠 REACTIVE PIPE CHAIN (debounceTime, distinctUntilChanged, map)
  --------------------------------------------------------------------

  ✔ searchInput$ (Subject)
  ------------------------------------------------
  - A Subject is both:
        • Observable (can be subscribed to)
        • Observer (can receive .next() values)
  - Every input event calls: searchInput$.next(value)

  ✔ pipe(...)
  ------------------------------------------------
  - pipe() does not execute anything immediately.
  - It creates a NEW Observable with a chain of operators.
  - results$ becomes a derived, transformed stream.

  ✔ debounceTime(300)
  ------------------------------------------------
  - Waits 300ms after the LAST value.
  - If new values arrive before 300ms → resets timer.
  - Only emits when user stops typing.
  - Used to prevent UI spam / API spam.
  - Internally uses a timer (setTimeout).

  ✔ distinctUntilChanged()
  ------------------------------------------------
  - Remembers the previous emitted value.
  - Emits only if (current !== previous).
  - Avoids duplicate UI updates.

  ✔ map()
  ------------------------------------------------
  - Transforms incoming values.
  - Works like Array.map() but for async values.
  - map(text => text.toUpperCase()) converts each emission.

  ✔ results$ stream
  ------------------------------------------------
  - Emits only clean, debounced, unique, transformed values.
  - No manual subscribe needed.

  ✔ async pipe behavior
  ------------------------------------------------
  - In template: {{ results$ | async }}
  - Auto-subscribes and auto-unsubscribes.
  - Triggers change detection on every new emission.
  - Perfect for reactive UI patterns.

  ✔ Why this pattern is important
  ------------------------------------------------
  - Used in search bars, filters, live updates, APIs.
  - Prevents memory leaks.
  - Avoids ngOnDestroy logic.
  - Makes components clean and declarative.

  --------------------------------------------------------------------
*/

}
