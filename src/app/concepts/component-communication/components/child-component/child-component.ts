import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CounterService } from '../../counter-service';

@Component({
  selector: 'child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.scss',
})
export class ChildComponent {
  @Input() messageFromParent!: string;
  @Output() messageFromChild= new EventEmitter<string>();

  public counter = inject(CounterService)

  sendResponse() {
    this.messageFromChild.emit("Hi Parent Child Received your message");
  }
}
