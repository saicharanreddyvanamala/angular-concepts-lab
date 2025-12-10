import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { concat, materialize, of, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-materialize-basic',
  imports: [CommonModule],
  templateUrl: './materialize-basic.html',
  styleUrl: './materialize-basic.scss',
})
export class MaterializeBasic implements OnInit {
  logs: any[] = [];

  ngOnInit(): void {

    const source$ = concat(
      of(1, 2),
      throwError(() => "Something went wrong!")
    );

    source$.pipe(
      materialize(),       // convert next/error/complete into values
      tap(v => console.log("Materialized:", v))
    )
    .subscribe(v => this.logs.push(v));
  }
}
