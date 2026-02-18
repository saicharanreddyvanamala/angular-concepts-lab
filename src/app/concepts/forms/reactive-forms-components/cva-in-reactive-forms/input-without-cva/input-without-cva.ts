import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-without-cva',
  imports: [],
  templateUrl: './input-without-cva.html',
  styleUrl: './input-without-cva.scss',
})
export class InputWithoutCva {
  @Input() label = '';
  @Input() controlName = '';
  @Input() value: string | null | undefined = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const v = (event.target as HTMLInputElement).value;
    this.value = v;
    this.valueChange.emit(v);
  }
}
