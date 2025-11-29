import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-async-validators-demo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './async-validators-demo.html',
  styleUrl: './async-validators-demo.scss',
})
export class AsyncValidatorsDemo {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required], [this.checkUserName()]]
    })
  }

  checkUserName() {
    return (control: AbstractControl) => {
      const value = control.value;

      if(!value) return(null); // empty means no eror

      // Fake API call
      return timer(800).pipe(
        map(() => {
          const takenUsernames = ['john', 'admin', 'test'];
          return takenUsernames.includes(value.toLowerCase()) ? {usernameTaken: true} : null;
        })
      )
    }
  }
}
