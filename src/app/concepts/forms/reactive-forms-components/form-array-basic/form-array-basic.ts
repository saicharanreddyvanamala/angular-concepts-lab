import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-array-basic',
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './form-array-basic.html',
  styleUrl: './form-array-basic.scss',
})
export class FormArrayBasic {

  profileForm = new FormGroup({
    name: new FormControl(''),
    hobbies: new FormArray<FormControl<string | null>>([]) // <- FormArray
  });

  get hobbies(): FormArray<FormControl<string | null>> {
    return this.profileForm.get('hobbies') as FormArray<FormControl<string | null>>;
  }

  addHobby() {
    this.hobbies.push(new FormControl<string>(''));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  submit() {
    console.log('form value: ', this.profileForm.value);
  }
}
