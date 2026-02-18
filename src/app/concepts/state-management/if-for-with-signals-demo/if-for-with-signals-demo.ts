import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-if-for-with-signals-demo',
  imports: [],
  templateUrl: './if-for-with-signals-demo.html',
  styleUrl: './if-for-with-signals-demo.scss',
})
export class IfForWithSignalsDemo {
  count = signal(0);
  items = signal(['A', 'B']);

  add() {
    this.items.update(arr => [...arr, 'C' + Math.random().toFixed(2)]);
  }

  inc() {
    this.count.update(v => v + 1);
  }
}
