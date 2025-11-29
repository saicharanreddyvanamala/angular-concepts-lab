import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-in-form-array',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-group-in-form-array.html',
  styleUrl: './form-group-in-form-array.scss',
})
export class FormGroupInFormArray {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      skills: this.fb.array([this.createSkillGroup()])
    })
  }

  get skills(): FormArray<FormGroup> {
    return this.profileForm.get('skills') as FormArray<FormGroup>;
  }

  private createSkillGroup(): FormGroup {
    return this.fb.group({
      skill: [''],
      level: ['']
    })
  }

  addSkill() {
    this.skills.push(this.createSkillGroup());
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submit() {
    if(this.profileForm.invalid) {
      this.profileForm.markAllAsTouched()
      return;
    }
    console.log('FORM: ', this.profileForm.value);
  }
}
