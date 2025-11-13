import { Component, inject, Input, Output } from '@angular/core';
import { ChildComponent } from "../child-component/child-component";
import { CounterService } from '../../counter-service';

@Component({
  selector: 'parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
})
export class ParentComponent {
  messageFromChild!: string;
  messageFromParent = 'Hi to Child this your parent!';
  // we can inject the counterService in two ways here one i directly as the class field initializer and the other is through constructor body
  // 1. private counterService = inject(CounterService)
  public counter: CounterService;

  constructor(){
    this.counter = inject(CounterService);
  }

  onChildResponse(msg: string) {
    this.messageFromChild = msg;
  }

}
