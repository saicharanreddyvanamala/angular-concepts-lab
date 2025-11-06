import { Component, Input, Output } from '@angular/core';
import { ChildComponent } from "../child-component/child-component";

@Component({
  selector: 'parent-component',
  imports: [ChildComponent],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.scss',
})
export class ParentComponent {
  messageFromChild!: string;
  messageFromParent = 'Hi from Child this your parent!';

  onChildResponse(msg: string) {
    this.messageFromChild = msg;
  }

}
