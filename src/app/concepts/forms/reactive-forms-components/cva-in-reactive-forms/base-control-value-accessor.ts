import { ControlValueAccessor } from '@angular/forms';

/**
 * Base class for all custom form controls.
 * Handles common ControlValueAccessor logic.
 */
export abstract class BaseControlValueAccessor<T>
  implements ControlValueAccessor {

  value!: T;
  disabled = false;

  protected onChange: (value: T) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(value: T): void {
    this.value = value;
    console.log('hey value');

  }

  registerOnChange(fn: (value: T) => void): void {
    console.log('hey');
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
