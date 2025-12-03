import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-of-from-interval-timer',
  imports: [],
  templateUrl: './of-from-interval-timer.html',
  styleUrl: './of-from-interval-timer.scss',
})
export class OfFromIntervalTimer implements OnInit, OnDestroy {
  subs: Subscription[] = []

  ngOnInit() {
    this.demoOf();
    this.demoFrom();
    this.demoInterval();
    this.demoTimer();
  }

  demoOf(){
    const obs$ = of(1, 2, 3, 4);

    const sub = obs$.subscribe(value => {
      console.log('Of demo emitted values: ', value);
    });
    this.subs.push(sub);
  }

  demoFrom() {
    const obs$ = from([1, 2, 3, 'hello']);

    const sub = obs$.subscribe(value => {
      console.log('From demo emitted values: ', value);
    });
    this.subs.push(sub);
  }

  demoInterval() {
    const obs$ = interval(1000);

    const sub = obs$.subscribe(value => {
      console.log('Interval demo emitted values: ', value);
    });
    this.subs.push(sub);
  }

  demoTimer() {
    const obs$ = timer(3000);

    const sub = obs$.subscribe(value => {
      console.log('Timer demo emitted values: ', value);
    });
    this.subs.push(sub);
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe())
  }
}
