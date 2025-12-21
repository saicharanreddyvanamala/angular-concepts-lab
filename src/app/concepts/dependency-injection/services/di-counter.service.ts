import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterSerivce {
  constructor() {
    console.log('Counter Service Instantiated');
  }
  count = 0;

  increment() {
    this.count++;
  }
}
