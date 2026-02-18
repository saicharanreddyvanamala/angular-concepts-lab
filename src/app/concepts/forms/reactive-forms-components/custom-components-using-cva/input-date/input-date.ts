import { Component, Input } from '@angular/core';
import { BaseInput } from '../base-input/base-input';
import { provideValueAccessor } from '../value-accessor.provider';

@Component({
  selector: 'app-input-date',
  imports: [],
  templateUrl: './input-date.html',
  styleUrl: './input-date.scss',
  providers: [provideValueAccessor(InputDate)]
})
export class InputDate extends BaseInput<string> {
  @Input() min?: string;
  @Input() max?: string;

  onInput(e: Event) {
    this.setValue((e.target as HTMLInputElement).value);
  }
}
