import { Component } from '@angular/core';

@Component({
  selector: 'app-default-cd-demo',
  imports: [],
  templateUrl: './default-cd-demo.html',
  styleUrl: './default-cd-demo.scss',
})
export class DefaultCdDemo {
  counter = 0;
  increment() {
    this.counter ++;
    console.log('Button Clicked');
  }
}
