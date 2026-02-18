import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormField } from '../form-field/form-field';
import { InputComponent } from '../input-component/input-component';
import { CommonModule } from '@angular/common';
import { InputText } from '../input-text/input-text';
import { InputEmail } from '../input-email/input-email';
import { InputPassword } from '../input-password/input-password';
import { InputNumber } from '../input-number/input-number';
import { InputSelect } from '../input-select/input-select';
import { InputTextarea } from '../input-textarea/input-textarea';
import { InputDate } from '../input-date/input-date';

@Component({
  selector: 'app-login-component',
  imports: [ ReactiveFormsModule, CommonModule,InputEmail,InputPassword, InputNumber, InputSelect, InputTextarea, InputDate],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  form: FormGroup;
  loginError = '';
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: [''],
      number: [''],
      date: [''],
      file: [''],
      role: [''],
      description: [''],
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(8)
      ]]
    });
  }

  roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' }
];

  login() {
    console.log('Form value:', this.form.value);

    if (this.form.invalid) {
      console.log('Form errors:', this.form.errors);
      console.log('Email errors:', this.form.get('email')?.errors);
      console.log('Password errors:', this.form.get('password')?.errors);

      this.form.markAllAsTouched();
      return;
    }

    console.log(' Form valid. Submit to API');
  }
  disable() {
    const c = this.form.get('email');
    if (c?.disabled) c.enable();
    else c?.disable();
  }
}
