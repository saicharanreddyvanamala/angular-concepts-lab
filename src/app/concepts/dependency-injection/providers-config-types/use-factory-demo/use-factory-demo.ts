import { Component, Inject } from '@angular/core';
import { API_URL } from '../../services/use-value.constant';
import { apiUrlFactory } from '../../services/use-factory.function';
import { AuthService } from '../../../routing/auth.service';

@Component({
  selector: 'app-use-factory-demo',
  imports: [],
  providers:[{
    provide: API_URL,
    useFactory: apiUrlFactory,
    deps: [AuthService]
  }],
  templateUrl: './use-factory-demo.html',
  styleUrl: './use-factory-demo.scss',
})
export class UseFactoryDemo {
  constructor(@Inject(API_URL) public apiUrl: string) {
    console.log('injected API URL: ', apiUrl);
  }
}

/**1️⃣ What problem are we solving here?

You want to decide a value at runtime, based on some logic.

In your case:

If user is logged in → use secure API

If user is not logged in → use public API

This decision:

❌ should NOT be hardcoded in components

❌ should NOT be duplicated everywhere

✅ should be centralized

✅ should be testable

✅ should be injectable

That’s exactly why useFactory exists.




When DO you need @Inject?

You need @Inject when:

✅ Injecting a value that is NOT a class

string

number

boolean

object literal

config values*/
