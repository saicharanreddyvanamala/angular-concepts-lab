import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval, sampleTime, take, tap } from 'rxjs';

@Component({
  selector: 'app-sample-time-basic',
  imports: [CommonModule],
  templateUrl: './sample-time-basic.html',
  styleUrl: './sample-time-basic.scss',
})
export class SampleTimeBasic implements OnInit {
  samples: number[] = [];

  ngOnInit(): void {

    const source$ = interval(300).pipe(
      tap(v => console.log("Source:", v)), // emits fast
      take(15)
    );

    source$.pipe(
      sampleTime(1000)  // emit latest value every 1 second
    )
    .subscribe(v => {
      console.log("Sampled:", v);
      this.samples.push(v);
    });

  }
}
