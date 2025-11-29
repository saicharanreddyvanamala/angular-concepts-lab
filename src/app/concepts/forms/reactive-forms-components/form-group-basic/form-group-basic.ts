import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-basic',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-group-basic.html',
  styleUrl: './form-group-basic.scss',
})
export class FormGroupBasic implements OnInit {
  profileForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    // build the group using FormBuilder
    this.profileForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required]
    })
  }

  get usename() { return this.profileForm.get('username')!; }
  get email() { return this.profileForm.get('email')!; }

  fillDemo() {
    // patchValue updates only provided keys (safe)
    this.profileForm.patchValue({
      username: 'sai',
      email: 'sai@gmail.com'
    });
    // setValue would require both keys: this.profileForm.setValue({...})
  }

  submit() {
    if(this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    console.log('submit', this.profileForm.value);
  }

}
