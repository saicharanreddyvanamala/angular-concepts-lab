import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, tap } from 'rxjs';

@Component({
  selector: 'app-debounce-basic',
  imports: [],
  templateUrl: './debounce-basic.html',
  styleUrl: './debounce-basic.scss',
})
export class DebounceBasic implements AfterViewInit {
  @ViewChild('input') inputElement!: ElementRef<HTMLInputElement>

  ngAfterViewInit() {
    fromEvent(this.inputElement.nativeElement, 'input')
      .pipe(
        map((event:any) => event.target.value),
        tap(v => console.log('Typed: ', v)),
        debounceTime(500),
        tap(v => console.log('DEBOUNCED: ', v))
      ).subscribe();
  }

  /**
 * debounceTime(ms)
 * --------------------------------------
 * - Waits until no values are emitted for ms milliseconds.
 * - Only emits the LAST value.
 * - Useful for search, live filtering, form inputs.
 * - Prevents rapid firing of events.
 *
 * Behavior:
 * User types: a, ab, abc
 * debounce(500) → OUTPUT: "abc"
 *
 * Real Use Cases:
 *  - Search optimization
 *  - API performance
 *  - Form validation improvements
 *  - Avoiding spam clicks
 */

}
