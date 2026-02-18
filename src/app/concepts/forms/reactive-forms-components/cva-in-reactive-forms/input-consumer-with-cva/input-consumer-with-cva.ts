import { Component } from '@angular/core';
import { InputWithCva } from "../input-with-cva/input-with-cva";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-consumer-with-cva',
  imports: [ReactiveFormsModule,InputWithCva, CommonModule],
  templateUrl: './input-consumer-with-cva.html',
  styleUrl: './input-consumer-with-cva.scss',
})
export class InputConsumerWithCva {
 form = new FormGroup({
    name: new FormControl('')
  });

  disable() {
    const c = this.form.get('name');
    if (c?.disabled) c.enable();
    else c?.disable();
  }
}
