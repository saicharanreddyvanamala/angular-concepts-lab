import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-value-accessor',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccessor),
      multi: true
    }
  ],
  imports: [],
  templateUrl: './control-value-accessor.html',
  styleUrl: './control-value-accessor.scss',
})
export class ControlValueAccessor implements ControlValueAccessor {

  value = 0;
  disabled = false;
  // callbacks from Angular
  private onChange = (_:any) => {};
  private onTouched = () => {};

  // REQUIRED: Angular calls this when writing value from model
  writeValue(val: any): void {
    if (val !== undefined) {
      this.value = val;
    }
  }

  // REQUIRED: Angular tells us to register a callback for "value changed"
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  //REQUIRED: Angular tells us to register a callback for "touched"
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  // OPTIONAL: When control is disabled
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  increment() {
    if(this.disabled) return;
    this.value++;
    this.onChange(this.value); // notify Angular
  }

  decrement() {
    if(this.disabled) return;
    this.value--;
    this.onChange(this.value); // notify Angular
  }

  markTouched() {
    this.onTouched();
  }

  /*
  CONTROL VALUE ACCESSOR (CVA) NOTES

  ✔ CVA allows a custom component to act like <input>
  ✔ Works with ngModel + Reactive forms
  ✔ Angular expects the component to implement:

      writeValue(value)        → Angular writes value into component
      registerOnChange(fn)     → component notifies Angular when value changes
      registerOnTouched(fn)    → component notifies Angular when touched
      setDisabledState(bool)   → optional: handle disabled state

  ✔ NG_VALUE_ACCESSOR provider makes Angular treat the component as a form control.

  ✔ onChange(...) must be called whenever component updates its value.
  ✔ onTouched() should be called on blur or user interaction.

  ✔ This is how Angular bridges FORM MODEL ↔ CUSTOM UI COMPONENT.
*/

}
