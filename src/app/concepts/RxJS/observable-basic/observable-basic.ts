import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-basic',
  imports: [],
  templateUrl: './observable-basic.html',
  styleUrl: './observable-basic.scss',
})
export class ObservableBasic implements OnInit, OnDestroy {

  subscription!: Subscription;

  ngOnInit() {
    const obs = new Observable<string>(observer => {
      observer.next('Step 1: Obseralble Started');
      observer.next('Step 2: Another value emitted');

      setTimeout(() => {
        observer.next('Step 3: Emitted after 2 seconds');
        observer.complete();
      }, 2000);
    });

    this.subscription = obs.subscribe({
      next: value => console.log("NEXT:", value),
      error: error => console.log('ERROR:', error),
      complete: () => console.log("Completed")
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log("Subscription Cancelled");
  }
}
