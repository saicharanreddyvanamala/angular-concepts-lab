import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-programatic-form-api-demo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './programatic-form-api-demo.html',
  styleUrl: './programatic-form-api-demo.scss',
})
export class ProgramaticFormApiDemo {

  // Main Form
  profileForm: FormGroup
  constructor(private fb: FormBuilder){
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      address: this.fb.group({
        city: [''],
        zip: ['']
      }),
      tags: this.fb.array([
        'tag1', 'tag2'
      ])
    })
  }


  get tags(): FormArray<FormControl<string>> {
    return this.profileForm.get('tags') as FormArray<FormControl<string>>;
  }


  addTag(inputValue: string) {
    if (!inputValue.trim()) return;
    this.tags.push(new FormControl(inputValue, {nonNullable: true}));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  // ─────────────────────────────────────────────
  // setValue - strict update
  // ──────

  applySetValue() {
    this.profileForm.setValue({
      name: 'Sai',
      email: 'sai@gmail.com',
      address: {
        city: 'kurnool',
        zip: '1234'
      },
      tags: ['Angular','RxJS']  // Must match array length
    })
  }

  // ─────────────────────────────────────────────
  // patchValue - partial update
  // ─────────────────────────────────────────────

  applyPathValue() {
    this.profileForm.patchValue({
      email: 'charan@gmail.com',
      tags: ['ng','c#']
    })
  }

  // ─────────────────────────────────────────────
  // Reset form
  // ─────────────────────────────────────────────

  resetForm() {
    this.profileForm.reset();
    // this.profileForm.reset({
    //   name:'Hey'
    // }) we can also reset the form by having the default values to some fields
  }

  // ─────────────────────────────────────────────
  // Get raw value (including disabled controls)
  // ─────────────────────────────────────────────
  getRawValue() {
    console.log('RAW VALUE: ', this.profileForm.getRawValue());
  }

  // ─────────────────────────────────────────────
  // Demonstrate disable & enable
  // ─────────────────────────────────────────────
  disableEmail() {
    this.profileForm.get('email')?.disable();
  }

  enableEmail() {
    this.profileForm.get('email')?.enable();
  }

  // ─────────────────────────────────────────────
  // Add validators dynamically
  // ─────────────────────────────────────────────
  addDynamicValidators() {
    const email = this.profileForm.get('email');
    email?.setValidators([Validators.required, Validators.email]);
    email?.updateValueAndValidity();
  }

  /** This is the example to dynamically add the validators to the form group
   * form = new FormGroup({
      isCompany: new FormControl(false),
      gst: new FormControl('')
    });

    ngOnInit() {
      this.form.get('isCompany')?.valueChanges.subscribe(isCompany => {

        const gst = this.form.get('gst');

        if (isCompany) {
          gst?.addValidators([Validators.required]);
        } else {
          gst?.removeValidators([Validators.required]);
        }

        gst?.updateValueAndValidity();
      });
    }

   */

  showErrors() {
    this.profileForm.markAllAsTouched();
  }

  submit() {
     if(this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    console.log('FORM VALUE: ', this.profileForm.value);
  }

  /**
 * ============================
 * 🔥 REACTIVE FORMS – TS NOTES
 * ============================
 *
 * Angular Reactive Forms are built using 3 main classes:
 *
 * --------------------------------------------------------
 * 1️⃣ FormControl
 * --------------------------------------------------------
 * - Represents a single input field.
 * - Stores: VALUE, STATUS, VALIDATION, ERRORS.
 *
 * Usage in TS:
 *   new FormControl('initialValue')
 *
 * Usage in HTML:
 *   <input formControlName="name">
 *
 * Typical use cases:
 * - One text box
 * - One checkbox
 * - One dropdown
 *
 *
 * --------------------------------------------------------
 * 2️⃣ FormGroup
 * --------------------------------------------------------
 * - A collection (group) of FormControls or other FormGroups.
 * - Represents one "object" of data.
 *
 * Usage in TS:
 *   new FormGroup({
 *     name: new FormControl(''),
 *     age: new FormControl('')
 *   })
 *
 * Usage in HTML:
 *   <form [formGroup]="profileForm">
 *     <input formControlName="name">
 *   </form>
 *
 * Typical use cases:
 * - Complete Form
 * - Address Group (street, city, pin)
 * - Login Form (email, password)
 *
 *
 * --------------------------------------------------------
 * 3️⃣ FormArray
 * --------------------------------------------------------
 * - A dynamic list of FormControls OR FormGroups.
 * - Used when number of fields is unknown.
 *
 * Usage in TS:
 *   new FormArray([
 *      new FormControl(''),
 *      new FormControl('')
 *   ])
 *
 * OR with FormGroup:
 *   new FormArray([
 *      new FormGroup({ skill: new FormControl('') })
 *   ])
 *
 * Usage in HTML:
 *   <div formArrayName="skills">
 *     <div *ngFor="let s of skills.controls; let i=index">
 *       <input [formControl]="s">
 *     </div>
 *   </div>
 *
 * Typical use cases:
 * - Dynamic input fields
 * - Add/Remove Skills
 * - Add/Remove Addresses
 * - Add/Remove Phone numbers
 *
 *
 * --------------------------------------------------------
 * 4️⃣ Accessing FormArray from TS (Getter method)
 * --------------------------------------------------------
 * get skills() {
 *    return this.profileForm.get('skills') as FormArray;
 * }
 *
 * Why getter?
 * ✔ Cleaner HTML
 * ✔ No long expressions in template
 *
 *
 * --------------------------------------------------------
 * 5️⃣ Adding a Control or FormGroup Dynamically
 * --------------------------------------------------------
 * this.skills.push(new FormControl(''));
 *
 * OR
 *
 * this.skills.push(
 *    new FormGroup({
 *       skill: new FormControl(''),
 *       level: new FormControl('')
 *    })
 * );
 *
 *
 * --------------------------------------------------------
 * 6️⃣ Removing an item
 * --------------------------------------------------------
 * this.skills.removeAt(index);
 *
 *
 * --------------------------------------------------------
 * 7️⃣ Reading form values
 * --------------------------------------------------------
 * this.profileForm.value
 *
 *
 * --------------------------------------------------------
 * 8️⃣ Reset form
 * --------------------------------------------------------
 * this.profileForm.reset();
 *
 *
 * --------------------------------------------------------
 * 9️⃣ Patch values (update some fields)
 * --------------------------------------------------------
 * this.profileForm.patchValue({
 *   name: 'Sai',
 *   age: 22
 * });
 *
 *
 * --------------------------------------------------------
 * 🔥 SUMMARY
 * --------------------------------------------------------
 * FormControl  → Single input
 * FormGroup    → Object with keys
 * FormArray    → Dynamic list of FormControls/FormGroups
 *
 */



  /**
 * Programmatic Reactive Form APIs — Notes
 *
 * - setValue(value): strict, full shape required (throws if missing keys)
 * - patchValue(value): partial updates allowed
 * - reset(value?): resets value & flags; can pass defaults
 * - updateValueAndValidity(options?): re-run validators
 * - markAsTouched(), markAsDirty(), markAllAsTouched()
 * - disable()/enable() with options {onlySelf, emitEvent}
 * - options { emitEvent?: boolean, onlySelf?: boolean } control events & bubbling
 * - getRawValue(): returns values including disabled controls
 *
 * Best practices:
 * - Use patchValue for partial updates, setValue for full replacement.
 * - Use updateValueAndValidity after changing validators.
 * - Use emitEvent:false or onlySelf:true to avoid event loops.
 * - Use markAllAsTouched() on submit to show validation errors.
 */

}
