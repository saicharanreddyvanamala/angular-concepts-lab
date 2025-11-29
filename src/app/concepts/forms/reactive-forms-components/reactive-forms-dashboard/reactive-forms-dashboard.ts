import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactive-forms-dashboard',
  imports: [RouterLink, CommonModule],
  templateUrl: './reactive-forms-dashboard.html',
  styleUrl: './reactive-forms-dashboard.scss',
})
export class ReactiveFormsDashboard {
/*
  REACTIVE FORMS — CORE NOTES

  - Reactive Forms central idea: the form MODEL lives in TypeScript,
    template binds to that model using formGroup/formControlName.

  - Core types:
      AbstractControl, FormControl, FormGroup, FormArray, FormBuilder

  - Creation:
      const ctrl = new FormControl(initialValue, [syncValidators], [asyncValidators]);
      const group = new FormGroup({ name: ctrl, ... });
      const array = new FormArray([ ... ]);
      // FormBuilder shorthand:
      this.fb.group({ name: ['', Validators.required] });

  - Important methods:
      control.setValue(value)    // full value
      control.patchValue(partial)// partial update
      control.reset(value?)      // reset values & flags
      control.setErrors({key: true})
      control.updateValueAndValidity()
      control.markAsTouched(), markAsDirty(), markAllAsTouched()

  - Observables:
      control.valueChanges.subscribe(...)
      control.statusChanges.subscribe(...)

  - Validators:
      sync validators return ValidationErrors|null
      async validators return Observable<ValidationErrors|null>

  - Best practices:
      Prefer Reactive Forms for medium/large/complex apps.
      Use FormBuilder for readability.
      Use RxJS operators (debounce, distinctUntilChanged, switchMap) with valueChanges.
      Unsubscribe or use takeUntil pattern for long-lived subscriptions.
      Use patchValue for partial updates; setValue only when shape matches.
*/

}
