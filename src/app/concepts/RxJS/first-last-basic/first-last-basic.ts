import { Component, OnInit } from '@angular/core';
import { first, from, last, tap } from 'rxjs';

@Component({
  selector: 'app-first-last-basic',
  imports: [],
  templateUrl: './first-last-basic.html',
  styleUrl: './first-last-basic.scss',
})
export class FirstLastBasic implements OnInit {
  ngOnInit() {
    const source$ = from([1,2,3,4]);

    // FIRST VALUE
    source$.pipe(
      first(),
      tap(v => console.log('FIRST value Emitted: ', v))
    ).subscribe();

    // LAST VALUE
    source$.pipe(
      last(),
      tap(v => console.log('LAST value Emitted: ', v))
    ).subscribe();
  }
}
