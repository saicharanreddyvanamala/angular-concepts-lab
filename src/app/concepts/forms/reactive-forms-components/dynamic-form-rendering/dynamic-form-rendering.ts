import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-rendering',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-rendering.html',
  styleUrl: './dynamic-form-rendering.scss',
})
export class DynamicFormRendering implements OnInit {
  form!: FormGroup;

  formConfig = [
    {
      type: 'text', label: 'Full Name', name: 'fullName', required: true
    },
    {
      type:'email', label: 'Email', name: 'email', required: true
    },
    {
      type: 'number', label: 'Age', name:'age', required: false
    },
    {
      type: 'select', label: 'Role', name: 'role', options: ['Admin', 'User', 'Guest'], required: true
    }
  ];

  ngOnInit() {
    const controls: any = {};

    this.formConfig.forEach(field => {
      const validators = [];
      if(field.required) validators.push(Validators.required);

      controls[field.name] = new FormControl('', validators);
    });
    this.form = new FormGroup(controls);
  }

  submit() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log("FORM: ", this.form.value);
  }
}
