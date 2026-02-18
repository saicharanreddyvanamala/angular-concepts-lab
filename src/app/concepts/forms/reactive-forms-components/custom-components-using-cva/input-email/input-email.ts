import { Component } from '@angular/core';
import { BaseInput } from '../base-input/base-input';
import { provideValueAccessor } from '../value-accessor.provider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-email',
  imports: [CommonModule],
  templateUrl: './input-email.html',
  styleUrl: './input-email.scss',
  providers: [provideValueAccessor(InputEmail)]
})
export class InputEmail extends BaseInput<string> {
 onInput(e: Event) {
    this.setValue((e.target as HTMLInputElement).value);
  }
}
