import { Component, OnInit } from '@angular/core';
import { delay, fromEvent, map, of, pipe, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-switch-map-basic',
  imports: [],
  templateUrl: './switch-map-basic.html',
  styleUrl: './switch-map-basic.scss',
})
export class SwitchMapBasic implements OnInit {
  ngOnInit() {
    const input = document.getElementById('searchBox') as HTMLInputElement;

    fromEvent(input, 'input')
      .pipe(
        map((e:any) => e.target.value),
        tap(v => console.log('Typed: ', v)),

        // cancel previous work, switch to new observable
        switchMap(text => {
          console.log('Starting fake API call for:', text);
          // Fake API(responds in 1 second)
          return of(`Result for: ${text}`).pipe(delay(1000));
        }),
        tap(result => console.log('API Response: ', result))
      )
      .subscribe();

  }

  /**
 * switchMap()
 * -----------------------------------------
 * - Switch to a NEW observable whenever a new value arrives.
 * - Cancels previous inner observables.
 * - Only latest observable result is emitted.
 *
 * Perfect for:
 *  - Live search
 *  - Autocomplete
 *  - Dependent dropdowns
 *  - Canceling old HTTP requests
 *  - Route param → fetch data
 *
 * Behavior:
 * new value arrives → cancel previous → switch to new.
 *
 * Debounce + distinctUntilChanged + switchMap = Search Pattern
 */

}
