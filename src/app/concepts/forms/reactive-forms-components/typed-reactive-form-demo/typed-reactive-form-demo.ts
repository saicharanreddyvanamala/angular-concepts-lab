import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// 1) Define typed inner structures

interface AddressForm {
  city: FormControl<string>;
  pincode: FormControl<number>;
}

interface ProfileForm {
  name: FormControl<string>;
  email: FormControl<string>;
  age: FormControl<number>;
  address: FormGroup<AddressForm>;
  skills: FormArray<FormControl<string>>;
}

@Component({
  selector: 'app-typed-reactive-form-demo',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './typed-reactive-form-demo.html',
  styleUrl: './typed-reactive-form-demo.scss',
})
export class TypedReactiveFormDemo {

  profileForm: FormGroup<ProfileForm>;

  constructor(private fb:FormBuilder) {
    this.profileForm = this.fb.nonNullable.group<ProfileForm>({
      name: this.fb.nonNullable.control('',{
        validators: [Validators.required, Validators.minLength(3)]
      }),
      email: this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.email]
      }),
      age: this.fb.nonNullable.control(18),
      address: this.fb.nonNullable.group<AddressForm>({
        city: this.fb.nonNullable.control(''),
        pincode: this.fb.nonNullable.control(0)
      }),
      skills: this.fb.nonNullable.array<FormControl<string>>([
        this.fb.nonNullable.control('Angular')
      ]),
    });
  }

  // 3) Convenience getters (also fully typed)
  get name(): FormControl<string> {
    return this.profileForm.controls.name;
  }

  get email(): FormControl<string> {
    return this.profileForm.controls.email;
  }

  get age(): FormControl<number> {
    return this.profileForm.controls.age;
  }

  get address(): FormGroup<AddressForm> {
    return this.profileForm.controls.address;
  }

  get skills(): FormArray<FormControl<string>> {
    return this.profileForm.controls.skills;
  }

  addSkill() {
    this.skills.push(this.fb.nonNullable.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  loadDemoData() {
    this.profileForm.patchValue({
      name: 'Charan',
      email: 'charan@gmail.com',
      age: 25,
      address: {
        city: 'Hyderabad',
        pincode: 50001,
      },
    });
  }

  submit() {
    if(this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    // profile form value is fully typed:
    const value = this.profileForm.getRawValue(); // includes all controls
    console.log('Typed form value: ', value);

    // TypeScript knows:
    // value.name: string
    // value.age: number
    // value.address.city: string
    // value.skills: string[]
  }



  /**
 * LEVEL 13 – FormBuilder + Typed Reactive Forms
 * =============================================
 *
 * 1) FormBuilder – shorter syntax for creating forms:
 *
 *    // Without FormBuilder
 *    const form = new FormGroup({
 *      name: new FormControl(''),
 *      email: new FormControl('')
 *    });
 *
 *    // With FormBuilder
 *    constructor(private fb: FormBuilder) {}
 *
 *    form = this.fb.group({
 *      name: [''],
 *      email: ['']
 *    });
 *
 * 2) Adding validators with FormBuilder:
 *
 *    form = this.fb.group({
 *      name: ['', [Validators.required, Validators.minLength(3)]],
 *      email: ['', [Validators.required, Validators.email]]
 *    });
 *
 * 3) Nested FormGroups with FormBuilder:
 *
 *    form = this.fb.group({
 *      name: [''],
 *      address: this.fb.group({
 *        city: [''],
 *        pincode: ['']
 *      })
 *    });
 *
 * 4) FormArray with FormBuilder:
 *
 *    form = this.fb.group({
 *      skills: this.fb.array([
 *        this.fb.control('Angular')
 *      ])
 *    });
 *
 *    get skills() {
 *      return this.form.get('skills') as FormArray<FormControl<string>>;
 *    }
 *
 *    addSkill() {
 *      this.skills.push(this.fb.control(''));
 *    }
 *
 * 5) Typed Forms (Angular 14+)
 * -----------------------------
 * - We can give types to FormControl / FormGroup / FormArray.
 * - This makes form.value, controls, patchValue, setValue all type-safe.
 *
 *    interface AddressForm {
 *      city: FormControl<string>;
 *      pincode: FormControl<string>;
 *    }
 *
 *    interface ProfileForm {
 *      name: FormControl<string>;
 *      email: FormControl<string>;
 *      age: FormControl<number>;
 *      address: FormGroup<AddressForm>;
 *      skills: FormArray<FormControl<string>>;
 *    }
 *
 *    form: FormGroup<ProfileForm> = this.fb.nonNullable.group<ProfileForm>({
 *      name: this.fb.nonNullable.control(''),
 *      email: this.fb.nonNullable.control(''),
 *      age: this.fb.nonNullable.control(18),
 *      address: this.fb.nonNullable.group<AddressForm>({
 *        city: this.fb.nonNullable.control(''),
 *        pincode: this.fb.nonNullable.control(''),
 *      }),
 *      skills: this.fb.array<FormControl<string>>([
 *        this.fb.nonNullable.control('Angular')
 *      ])
 *    });
 *
 * 6) nonNullable FormBuilder:
 * ---------------------------
 * - this.fb.nonNullable.group() and .control() create controls whose value
 *   type is NOT union with null.
 *
 *    const age = this.fb.nonNullable.control(18); // FormControl<number>
 *
 * 7) Benefits of Typed Forms:
 * ---------------------------
 * - TypeScript catches:
 *    - Wrong control names in patchValue/setValue
 *    - Wrong data types (e.g. assigning string to number)
 * - Safer refactors for large forms.
 *
 * 8) Best Practices:
 * ------------------
 * - Use FormBuilder for all medium/large forms.
 * - Use typed interfaces for complex forms (ProfileForm, AddressForm, etc.).
 * - Use fb.nonNullable for most required fields to avoid null issues.
 * - Keep form structure + types in one place for clarity.
 */

}
