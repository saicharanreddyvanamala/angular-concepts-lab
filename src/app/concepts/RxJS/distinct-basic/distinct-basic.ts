import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-distinct-basic',
  imports: [],
  templateUrl: './distinct-basic.html',
  styleUrl: './distinct-basic.scss',
})
export class DistinctBasic implements OnInit {
  ngOnInit() {
    const input = document.getElementById('searchBox') as HTMLInputElement;

    fromEvent(input, 'input')
    .pipe(
      map((e:any) => e.target.value.trim()),
      tap(v => console.log('Typed: ', v)),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(v => console.log('DISTINCT: ', v))
    ).subscribe();
  }

  /**
 * distinctUntilChanged()
 * ----------------------------------------
 * - Emits ONLY when the value is different from previous emission.
 * - Prevents duplicate consecutive values.
 * - Very useful in form valueChanges and search inputs.
 *
 * Example:
 *   Input: a, a, ab, ab, abc
 *   Output: a, ab, abc
 *
 * Why useful?
 *   - Prevents duplicate API calls
 *   - Improves performance
 *   - Stops unnecessary re-renders
 *   - Reduces noise in event streams
 */

}
