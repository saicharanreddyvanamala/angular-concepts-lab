import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested-form-groups',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './nested-form-groups.html',
  styleUrl: './nested-form-groups.scss',
})
export class NestedFormGroups {
  profileForm: FormGroup;
  constructor() {
    this.profileForm = new FormGroup({
      personal: new FormGroup({
        firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
        lastName: new FormControl('')
      }),
      address: new FormGroup({
        city: new FormControl('', Validators.required),
        pincode: new FormControl('',[ Validators.required , Validators.pattern(/^[0-9]{6}$/)])
      }),
      skills: new FormArray([
        this.createSkillsGroup()
      ])
    })
  }

  createSkillsGroup(): FormGroup {
    return new FormGroup({
      skill: new FormControl(''),
      exp: new FormControl('')
    })
  }


  get personal(): FormGroup {
    return this.profileForm.get('personal') as FormGroup
  }

  get address(): FormGroup {
    return this.profileForm.get('address') as FormGroup
  }

  get firstName(): FormControl {
    return this.personal.get('firstName') as FormControl
  }

  get pincode(): FormControl {
    return this.address.get('pincode') as FormControl
  }

  get skills(): FormArray<FormGroup> {
    return this.profileForm.get('skills') as FormArray<FormGroup>
  }

  addSkill() {
    this.skills.push(this.createSkillsGroup())
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  /*
  -----------------------------
      DYNAMIC FORMARRAY NOTES
  -----------------------------

  ✔ FormArray is used to store dynamic fields.
    Example: skills[], items[], addresses[]

  ✔ Each item inside FormArray can be:
      - FormControl
      - FormGroup
      - even another FormArray

  ✔ We create a reusable function createSkillGroup()
    so we can push the same structure every time.

  ✔ skills.controls gives access to all internal controls
    so we can use *ngFor.

  ✔ [formGroup]="group" is required when looping.

  ✔ Add row → this.skills.push(...)
  ✔ Remove row → this.skills.removeAt(index)

  ✔ FormArray is used in 90% real apps for:
      - Dynamic rows
      - Editable lists
      - Dynamic form generation
*/

}
