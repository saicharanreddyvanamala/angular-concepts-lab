import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaceValidator } from './no-space.validator';
import { atLeastOneCheckedValidator } from './check-box.validator';

@Component({
  selector: 'app-basic-validators-demo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-validators-demo.html',
  styleUrl: './basic-validators-demo.scss',
})
export class BasicValidatorsDemo {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required, noSpaceValidator]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      skills: this.fb.array([
        false,false,false
      ], atLeastOneCheckedValidator)
    })
  }

  /**
   *
   * let validators = [Validators.required];

    if (userRole === 'admin') {
      validators.push(Validators.minLength(3));
    } else {
      validators.push(Validators.minLength(6));
    }

    this.form = new FormGroup({
      username: new FormControl('', Validators.compose(validators))
    });

    Validators.compose is used when we have the requirement of changing the validators while app is running here based on userRole the validators are changed
  */

  get name(): FormControl<string> {
    return this.profileForm.get('name') as FormControl;
  }

  get email(): FormControl<string> {
    return this.profileForm.get('email') as FormControl
  }

  get password(): FormControl<string> {
    return this.profileForm.get('password') as FormControl
  }

  get skills(): FormArray {
    return this.profileForm.get('skills') as FormArray
  }

  submit() {
    if(this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    console.log("FORM: ", this.profileForm.value);
  }
}
