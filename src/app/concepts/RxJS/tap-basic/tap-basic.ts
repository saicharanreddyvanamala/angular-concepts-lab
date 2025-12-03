import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-tap-basic',
  imports: [],
  templateUrl: './tap-basic.html',
  styleUrl: './tap-basic.scss',
})
export class TapBasic implements OnInit, OnDestroy {
  sub! : Subscription
  source$ = of(1,2,3,4,5)

  ngOnInit() {
    this.source$.pipe(
      tap(value => console.log('Tap before map: ', value)),
      map(value => value * 10),
      tap(value => console.log('Tap after map: ', value))
    ).subscribe(
      finalValue => console.log('Final Subscriber value: ', finalValue)
    )
  };

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  /**
 * tap() operator
 * -------------------------
 * • Used for side-effects (logging, saving, updating UI)
 * • Does NOT modify the value
 * • Does NOT filter or transform the stream
 * • Commonly used for debugging pipelines
 * • Perfect for showing/hiding loaders
 * • Perfect inside HTTP pipelines
 * • Perfect with form valueChanges
 *
 * PIPELINE FLOW:
 * source → tap → map → tap → subscriber
 *
 * tap() = observer for debugging, not modifying
 *
 *
 * this.http.get('/profile')
  .pipe(
    tap(res => localStorage.setItem('profile', JSON.stringify(res)))
  );

  login$
  .pipe(
    tap(() => this.loader = true),
    switchMap(() => this.http.post('/login', body)),
    tap(() => this.loader = false)
  )
  .subscribe();

  this.http.get('/api/users')
  .pipe(
    tap(res => console.log("API Response:", res)),
    map(res => res.data)
  )

 */

}
