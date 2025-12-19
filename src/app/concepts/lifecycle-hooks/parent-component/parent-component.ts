import { Component } from '@angular/core';
import { LifecycleOrderDemo } from "../lifecycle-order-demo/lifecycle-order-demo";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-parent-component',
  imports: [LifecycleOrderDemo],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
})
export class ParentComponent {
  val: number = 0;
}
