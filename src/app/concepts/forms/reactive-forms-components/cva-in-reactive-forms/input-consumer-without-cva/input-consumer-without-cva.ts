import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputWithoutCva } from '../input-without-cva/input-without-cva';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-consumer-without-cva',
  imports: [ReactiveFormsModule, InputWithoutCva, CommonModule],
  templateUrl: './input-consumer-without-cva.html',
  styleUrl: './input-consumer-without-cva.scss',
})
export class InputConsumerWithoutCva {
  a = 'name'
 form = new FormGroup({
    'name': new FormControl('', Validators.required)
  });

  onNameChange(v: string) {
    this.form.get('name')?.setValue(v);
    // Angular does NOT know:
    // - when user touched
    // - when user interacted
    // - dirty/touched states are wrong
  }
}
