import {
  Component,
  Input,
  Optional,
  Self,
  forwardRef,
  signal
} from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { BaseCva } from '../base-form-controller';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-component.html',
  styleUrls: ['./input-component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent extends BaseCva<string> {

  @Input() label = '';
  @Input() id = '';
  @Input() type: 'text' | 'number'| 'date' | 'email' | 'password' | 'file' = 'text';
  @Input() placeholder = '';
  @Input() minlength?: number;
  @Input() maxlength?: number;
  @Input() errorMessages: Record<string, string> = {};
  @Input() labelCol = 'col-sm-3';
  @Input() controlCol = 'col-sm-9';

  showPassword = signal(false);

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
  }
  get inputType() {
    return this.type === 'password' && this.showPassword()
      ? 'text'
      : this.type;
  }

  togglePassword() {
    this.showPassword.update(v => !v);
  }

}
