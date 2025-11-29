import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noSpaceValidator(control: AbstractControl): ValidationErrors | null {
  if(control.value && control.value.includes(' ')) {
    return {noSpace: true};
  }
  return null;
}
