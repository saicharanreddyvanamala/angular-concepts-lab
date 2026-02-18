import { Component, Input } from '@angular/core';
import { BaseInput } from '../base-input/base-input';
import { provideValueAccessor } from '../value-accessor.provider';

@Component({
  selector: 'app-input-number',
  imports: [],
  templateUrl: './input-number.html',
  styleUrl: './input-number.scss',
  providers: [provideValueAccessor(InputNumber)]
})
export class InputNumber extends BaseInput<number> {
  @Input() min?: number;
  @Input() max?: number;
  @Input() step = 1;

  onInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this.setValue(val ? Number(val) : null);
  }
}
