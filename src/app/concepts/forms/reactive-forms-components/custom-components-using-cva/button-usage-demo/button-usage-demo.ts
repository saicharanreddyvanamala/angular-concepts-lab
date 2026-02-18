import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { delay, of } from 'rxjs';
import { Button } from "../button/button";

@Component({
  selector: 'app-button-usage-demo',
  imports: [Button, ReactiveFormsModule],
  templateUrl: './button-usage-demo.html',
  styleUrl: './button-usage-demo.scss',
})
export class ButtonUsageDemo {
  form!: FormGroup;
  submitting = false;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
    email: ['', Validators.required]
  });
  }

  // fake API
  fakeApi(data: any) {
    console.log('API started with:', data);
    return of(data).pipe(delay(2000));
  }

  submit() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;

    this.fakeApi(this.form.value).subscribe({
      next: res => {
        console.log('API success:', res);
        this.submitting = false;
      },
      error: () => {
        console.log('API error');
        this.submitting = false;
      }
    });
  }}
