import { Component, Inject } from '@angular/core';
import { API_URL } from '../../services/use-value.constant';

@Component({
  selector: 'app-use-value-demo',
  imports: [],
  providers: [{
    provide: API_URL, useValue: 'https://api.myapi.com'
  }],
  templateUrl: './use-value-demo.html',
  styleUrl: './use-value-demo.scss',
})
export class UseValueDemo {
  constructor(@Inject(API_URL) private apiUrl: string) {
    console.log(this.apiUrl);
  }
}
/**useValue — CONSTANTS & CONFIG OBJECTS
🔹 What it does

Injects a fixed value, not a class.


IMPORTANT

No instantiation

Same value everywhere

Often combined with InjectionToken (next level)

🧠 REAL-WORLD USE

App configuration

Feature flags

Environment values*/


/**
 * DI LEVEL 5 — INJECTION TOKENS
 * -------------------------------------------
 * Problem:
 * - Interfaces don't exist at runtime
 * - String tokens are unsafe
 *
 * InjectionToken:
 * - Unique runtime key
 * - Typed
 * - Safe
 *
 * Use cases:
 * - Config objects
 * - Constants
 * - Interfaces
 * - Plugin systems
 *
 * @Inject():
 * - Required for non-class tokens
 */

