import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {
  @Input() messageFromParent!: string;
  @Output() messageFromChild= new EventEmitter<string>();

  sendResponse() {
    this.messageFromChild.emit("Hi Parent Child Received your message");
  }
}
