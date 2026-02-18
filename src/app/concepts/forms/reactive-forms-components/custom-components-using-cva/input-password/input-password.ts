import { Component, Input, signal } from '@angular/core';
import { BaseInput } from '../base-input/base-input';
import { provideValueAccessor } from '../value-accessor.provider';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input-password',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './input-password.html',
  styleUrl: './input-password.scss',
  providers: [provideValueAccessor(InputPassword)]
})
export class InputPassword extends BaseInput<string> {
  @Input() showToggle = true;
  @Input() minlength?: number;
  @Input() maxlength?: number;

  show = signal(false);
  faIcon = faEye;

  get type() {
    return this.show() ? 'text' : 'password';
  }

  toggle() {
    this.show.update(v => !v);
    if(this.show()) {
      this.faIcon = faEyeSlash;
    } else {
      this.faIcon = faEye;
    }
  }

  onInput(e: Event) {
    this.setValue((e.target as HTMLInputElement).value);
  }
}
