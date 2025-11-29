import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NoSpaceValidatorDirective } from "./nospace-validator.directive";
import { CommonModule } from '@angular/common';
import { MinAgeDirective } from "./min-age.directive";

@Component({
  selector: 'app-tdf-custom-validators-demo',
  imports: [FormsModule, NoSpaceValidatorDirective, CommonModule, MinAgeDirective],
  templateUrl: './tdf-custom-validators-demo.html',
  styleUrl: './tdf-custom-validators-demo.scss',
})
export class TdfCustomValidatorsDemo {
/**
 * ✔ Template-driven custom validators must be created as directives.
 * ✔ Use NG_VALIDATORS for sync validators.
 * ✔ validate(control: AbstractControl) returns:
 *      - null  → valid
 *      - { errorName: true } → invalid
 * ✔ You can pass inputs to validators (ex: minAge="18").
 * ✔ Angular automatically:
 *      - runs validators on value changes
 *      - updates ngModel.error, valid, invalid, touched, dirty
 *      - updates form validity
 * ✔ Custom validators become reusable like built-in ones.
 */

}
