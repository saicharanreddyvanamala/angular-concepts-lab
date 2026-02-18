import { Component, computed, effect, inject, signal } from '@angular/core';
import { CounterStore } from '../counter.service';

@Component({
  selector: 'app-signals-demo',
  imports: [],
  templateUrl: './signals-demo.html',
  styleUrl: './signals-demo.scss',
})
export class SignalsDemo {
  count = signal(0);
  store = inject(CounterStore);
  constructor() {

    // Logging effect
    effect(() => {
      console.log('Effect says: Count changed to', this.count());
    });

    // LocalStorage effect
    effect(() => {
      localStorage.setItem('count', this.count().toString());
    });

    // DOM effect
    effect(() => {
      document.title = 'Count: ' + this.count();
    });

    effect(() => {
      const id = setInterval(() => {
        console.log('Tick', this.count());
      }, 1000);

      return () => {
        clearInterval(id);
        console.log('Interval cleaned up');
      };
    });
          // What happens here?

          // Effect runs first time

          // Starts interval

          // If any dependency changes:

          // Angular calls cleanup function

          // Clears old interval

          // Runs effect again

          // Starts new interval

          // When component is destroyed:

          // Cleanup runs one final time

}

// logEffect = effect(() => {
//     console.log('Count changed to:', this.count());
//   });  This is also valid without the constructor to assign to a field intializer it will automatically logs when signal changes.
   double = computed(() => {
    console.log('Computing double');
    return this.count() * 2;
  });

  triple = computed(() => {
    console.log('Computing triple');
    return this.double() + this.count();
  });


  inc() {
    this.count.update(v => v+1);
  }

   setToTen() {
    this.count.set(10);
  }
  ngOnDestroy() {
  console.log('Component destroyed');
}
}
/**
 * STATE MANAGEMENT — LEVEL 3 (SIGNALS)
 * -------------------------------------------
 * Signals:
 * - Fine-grained reactivity
 * - No subscriptions
 * - No async pipe
 *
 * APIs:
 * - signal()
 * - computed()
 * - effect()
 *
 * Use signals for:
 * - UI state
 * - App state
 *
 * Use RxJS for:
 * - Streams
 * - HTTP
 * - Async flows
 */


/**
 * STATE MANAGEMENT — LEVEL 2 (SERVICE-BASED)
 * -------------------------------------------
 * Use services as state containers
 *
 * Pattern:
 * - private BehaviorSubject
 * - public readonly Observable
 *
 * Rules:
 * - Single source of truth
 * - Immutable updates
 * - async pipe + OnPush
 *
 * Avoid:
 * - Exposing subjects
 * - Mutating state
 * - Manual subscriptions
 */

/**
 * STATE MANAGEMENT — LEVEL 4 (STATE + ROUTING)
 * -------------------------------------------
 * URL is part of application state
 *
 * Rules:
 * - Identity → route params
 * - UI preferences → query params
 * - Static metadata → route data
 *
 * Patterns:
 * - Route → State Service → UI
 * - Resolver for blocking data
 *
 * Goal:
 * - Refresh-safe
 * - Deep-linkable
 * - Predictable state
 */

/**
 * STATE MANAGEMENT — LEVEL 5 (NGRX: WHEN & WHY)
 * -------------------------------------------
 * NgRx provides:
 * - Centralized state
 * - Predictable updates
 * - Strict unidirectional flow
 *
 * Use NgRx when:
 * - App is large
 * - Many teams
 * - Complex workflows
 *
 * Avoid NgRx when:
 * - App is small/medium
 * - Simple CRUD
 *
 * Rule:
 * - Start simple, scale later
 */

/**
 * STATE MANAGEMENT — LEVEL 6 (ANTI-PATTERNS & BEST PRACTICES)
 * ----------------------------------------------------------
 * Avoid:
 * - God state services
 * - Mutable state
 * - Too many subjects
 * - Storing derived state
 * - Mixing UI & app state
 *
 * Best practices:
 * - Feature-scoped state
 * - Immutability
 * - Signals + computed
 * - Command methods
 * - URL as state
 */
