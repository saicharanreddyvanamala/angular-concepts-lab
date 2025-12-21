import { CommonModule } from '@angular/common';
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-cva',
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingCva),
      multi: true
    }

  ],
  templateUrl: './rating-cva.html',
  styleUrl: './rating-cva.scss',
})
export class RatingCva implements ControlValueAccessor {

  value = 0;
  stars = [1, 2, 3, 4, 5];
  disabled = false;

  onChange = (value: any) => {};
  onTouched = () => {};

  // -------------------------------
  // 1) Angular writes value into component
  // -------------------------------
  writeValue(value: number): void {
    this.value = value || 0;
  }

  // -------------------------------
  // 2) Angular gives the fn to call on value change
  // -------------------------------
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // -------------------------------
  // 3) Angular gives the fn to call on touch
  // -------------------------------
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // -------------------------------
  // 4) Angular enables/disables the component
  // -------------------------------
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // -------------------------------
  // Custom component logic
  // -------------------------------
  select(value: number) {
    if (this.disabled) return;

    this.value = value;

    // send the value to Angular
    this.onChange(value);

    // mark as touched
    this.onTouched();
  }
}
//multi: true allows Angular to support multiple value accessors without overriding the built-in ones.
/**6️⃣ Why multi: true?

This is CRITICAL.

Angular Forms supports multiple value accessors.

Example:

default input accessor

checkbox accessor

radio accessor

select accessor

custom accessor (yours)

So NG_VALUE_ACCESSOR is defined as a multi-provider.

What multi: true means
multi: true


Means:

“Add this provider to the existing list
Do NOT override other accessors.”

Internally Angular gets:

NG_VALUE_ACCESSOR = [
  DefaultInputAccessor,
  CheckboxAccessor,
  SelectAccessor,
  RatingCva   // <-- yours added here
]


If you remove multi: true:

❌ You overwrite Angular’s built-in accessors
❌ Forms break in unexpected ways */
