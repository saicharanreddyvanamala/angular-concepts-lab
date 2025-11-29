import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-programmatic-access-to-tdf',
  imports: [CommonModule, FormsModule],
  templateUrl: './programmatic-access-to-tdf.html',
  styleUrl: './programmatic-access-to-tdf.scss',
})
export class ProgrammaticAccessToTdf {
  @ViewChild('userForm') userForm!: NgForm;

  submitForm(){
    console.log("Form Data:", this.userForm.value);
    console.log("Name Control:", this.userForm.controls['name'].value);
  }

  fillDemoData() {
    this.userForm.form.patchValue({
      name: 'Charan',
      email: 'charan@gmail.com'
    })
  }

  resetAll(){
    this.userForm.reset();
  }

  /*
  PROGRAMMATIC ACCESS TO TEMPLATE-DRIVEN FORMS

  ✔ Use @ViewChild('formRef') to access the NgForm instance.
  ✔ NgForm gives full control over:
      • value
      • validity (valid/invalid)
      • touched/untouched
      • dirty/pristine
      • form groups and controls

  ✔ Access a control:
        this.form.controls['name']

  ✔ Read control state:
        this.form.controls['name'].value
        this.form.controls['name'].valid
        this.form.controls['name'].errors

  ✔ Modify values:
        setValue() -> requires ALL fields
        patchValue() -> update only selected fields

  ✔ Change states programmatically:
        markAsTouched(), markAsDirty(), markAsUntouched()

  ✔ Reset form:
        this.form.reset()
*/

}
