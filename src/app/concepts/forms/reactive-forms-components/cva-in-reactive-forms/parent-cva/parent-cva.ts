import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RatingCva } from "../rating-cva/rating-cva";

@Component({
  selector: 'app-parent-cva',
  imports: [ReactiveFormsModule, RatingCva],
  templateUrl: './parent-cva.html',
  styleUrl: './parent-cva.scss',
})
export class ParentCva {

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      rating: new FormControl(3) // default value
    });
  }

  submit() {
    console.log('Form Value:', this.form.value);
  }
}
