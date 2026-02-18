import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { provideValueAccessor } from '../value-accessor.provider';
import { BaseInput } from '../base-input/base-input';

@Component({
  selector: 'app-input-text',
  imports: [CommonModule],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
  providers: [provideValueAccessor(InputText)]
})
export class InputText extends BaseInput<string> {
  @Input() minlength?: number;
  @Input() maxlength?: number;
  @Input() pattern?: string;

    onInput(e: Event) {
      this.setValue((e.target as HTMLInputElement).value);
    }
}
