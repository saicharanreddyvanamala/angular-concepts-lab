import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";

export function atLeastOneCheckedValidator( formArray: AbstractControl) : ValidationErrors | null {
  const controls = (formArray as FormArray).controls;
  const anyChecked = controls.some(ctrl => ctrl.value === true);
  return anyChecked ? null : {requiredOne: true };
}
