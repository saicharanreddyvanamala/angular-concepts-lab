import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[noSpace]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NoSpaceValidatorDirective,
      multi: true
    }
  ]
})
export class NoSpaceValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.value) return null;

    if(control.value.includes(" ")) {
      return {noSpace: true}
    }

    return null;
  }
}
