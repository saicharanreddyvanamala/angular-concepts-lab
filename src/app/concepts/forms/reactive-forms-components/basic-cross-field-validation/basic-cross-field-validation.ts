import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordMatchValidator } from './password-match.vailidator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-cross-field-validation',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-cross-field-validation.html',
  styleUrl: './basic-cross-field-validation.scss',
})
export class BasicCrossFieldValidation {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      passwordGroup: new FormGroup(
        {
          password: new FormControl(''),
          confirmPassword: new FormControl('')
        },
        {
          validators: passwordMatchValidator
        }
      )
    })
  }

  get name(): FormControl<string> {
    return this.userForm.get('name') as FormControl
  }

  get passwordGroup(): FormGroup {
    return this.userForm.get('passwordGroup') as FormGroup;
  }

  submit() {
    if(this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return ;
    }
    console.log("FORM: ", this.userForm.value);
  }
}
