import { Component } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-cold-hot-demo',
  imports: [],
  templateUrl: './cold-hot-demo.html',
  styleUrl: './cold-hot-demo.scss',
})
export class ColdHotDemo {
  cold$ = new Observable(sub =>{
    console.log('Cold producer started');
    sub.next(Math.random())
  });

  hot$ = fromEvent(document, 'click');

  testCold() {
    this.cold$.subscribe(v => console.log('Cold Subscription: ', v))
  }

  testHot() {
    this.hot$.subscribe(v => console.log('Hot: document clicked'))
  }

  /**
 * Cold vs Hot Observables (Intro)
 * ------------------------------------
 * Cold:
 *   - Produces values ONLY when subscribed.
 *   - New execution for each subscriber.
 *   - http.get(), interval(), of(), from()
 *
 * Hot:
 *   - Produces values with or without subscribers.
 *   - Subscribers join a live stream.
 *   - form.valueChanges, fromEvent, router.events
 *
 * In Angular:
 *   - Most async sources are HOT (events, forms)
 *   - HTTP is COLD (new request per subscription)
 */

}
