import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-basic',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-control-basic.html',
  styleUrl: './form-control-basic.scss',
})
export class FormControlBasic implements OnInit {
  firstName = new FormControl('', Validators.required);

  ngOnInit() {
    // Watching value changes
    this.firstName.valueChanges.subscribe(v => {
      console.log('firstName changed -> ', v);
    });

    // Watching status changes
    this.firstName.statusChanges.subscribe(s => {
      console.log('firstName statusChanged -> ', s);
    });

  }

  setToDemo() {
    this.firstName.setValue('Sai');
  }

  reset() {
    this.firstName.reset();
  }
}
