import { Component, Input } from '@angular/core';
import { BaseInput } from '../base-input/base-input';
import { provideValueAccessor } from '../value-accessor.provider';

@Component({
  selector: 'app-input-textarea',
  imports: [],
  templateUrl: './input-textarea.html',
  styleUrl: './input-textarea.scss',
    providers: [provideValueAccessor(InputTextarea)]

})
export class InputTextarea extends BaseInput<string> {
  @Input() rows = 3;

  onInput(e: Event) {
    this.setValue((e.target as HTMLTextAreaElement).value);
  }
}
