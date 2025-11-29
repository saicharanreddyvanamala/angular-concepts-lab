import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: '[minAge]',
  providers: [
    { provide: NG_VALIDATORS, useExisting:MinAgeDirective, multi: true}
  ]
})
export class MinAgeDirective implements Validator {
  @Input() minAge!: number;

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if(value && value < this.minAge) {
      return { minAge: {required: this.minAge, actual: value}};
    }
    return null;
  }
}
