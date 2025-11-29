import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../personal-info/personal-info';
import { AddressInfo } from '../address-info/address-info';
import { SkillsSection } from '../skills-section/skills-section';

@Component({
  selector: 'app-profile-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PersonalInfo,
    AddressInfo,
    SkillsSection
  ],
  templateUrl: './profile-form.html',
})
export class ProfileFormComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({

      personal: this.fb.group({
        name: ['', Validators.required],
        age: [null],
      }),

      address: this.fb.group({
        city: [''],
        pincode: [''],
      }),

      skills: this.fb.array<FormControl<string>>([this.fb.nonNullable.control('angular')])
    });
  }

  get personalGroup(): FormGroup {
  return this.form.get('personal') as FormGroup;
}

get addressGroup(): FormGroup {
  return this.form.get('address') as FormGroup;
}

get skillsGroup(): FormArray<FormControl<string>> {
  return this.form.get('skills') as FormArray<FormControl<string>>;
}

  submit() {
    console.log('Final Value:', this.form.value);
  }


  /**
 * LEVEL 15 – Reusable Form Components / Splitting Forms Into Sections
 * ===================================================================
 *
 * WHY WE DO THIS:
 * ---------------
 * • Large real-world forms (KYC, onboarding, checkout, job application)
 *   easily have 40+ fields.
 * • Keeping all fields in one component becomes hard to read and maintain.
 * • Splitting into child components improves structure, readability,
 *   testability, reuse, and maintainability.
 *
 * CORE PATTERN:
 * --------------
 * The Parent component:
 *    - Owns the FULL FormGroup.
 *    - Creates all nested groups + arrays.
 *    - Handles submit(), patchValue(), validation, saving, etc.
 *
 * Child components:
 *    - DO NOT create new FormGroups.
 *    - They only receive a FormGroup or FormArray via @Input().
 *    - They render the UI for that section.
 *
 * BENEFITS:
 * ---------
 * 1. Clean separation of UI sections (Personal Info, Address, Skills, etc.)
 * 2. Children stay simple: pure UI + validation messages.
 * 3. All validation logic stays centralized in parent.
 * 4. Child components become reusable across modules/pages.
 * 5. Perfect architecture for large enterprises.
 *
 * FORMARRAY HANDLING (IMPORTANT):
 * -------------------------------
 * • When you pass a FormArray to a child component:
 *       @Input() skills!: FormArray<FormControl<string>>;
 *
 * • Inside child templates:
 *       *ngFor="let ctrl of skills.controls"
 *       <input [formControl]="ctrl">
 *
 * • DO NOT use:
 *       formArrayName
 *       formControlName
 *   unless the child also defines a parent [formGroup].
 *
 * TYPED REACTIVE FORMS:
 * ---------------------
 * • Use FormBuilder.nonNullable to avoid null types.
 * • Use typed FormArray:
 *       this.fb.array<FormControl<string>>([])
 *
 * • Use typed child @Input:
 *       @Input() skills!: FormArray<FormControl<string>>;
 *
 * BEST PRACTICES:
 * ---------------
 * ✓ Parent owns the FormGroup.
 * ✓ Children never create their own FormGroups.
 * ✓ Children receive only the piece they need (@Input).
 * ✓ Use nonNullable controls when possible.
 * ✓ Use getters in parent to avoid repeated casting.
 * ✓ Reuse children as “form sections” in big forms.
 *
 * RESULT:
 * -------
 * You get clean, scalable, enterprise-grade form architecture that matches
 * how Angular is used in real financial, healthcare, government systems.
 */

}
