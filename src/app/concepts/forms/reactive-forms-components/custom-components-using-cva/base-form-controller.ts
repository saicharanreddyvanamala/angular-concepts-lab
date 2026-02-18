import { ControlValueAccessor } from '@angular/forms';
import { signal } from '@angular/core';

export abstract class BaseCva<T> implements ControlValueAccessor {

  value = signal<T | null>(null);
  disabled = signal(false);
  touched = signal(false);
  focused = signal(false);

  protected onChange = (_: T | null) => {};
  protected onTouched = () => {};

  writeValue(value: T | null): void {
    this.value.set(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected setValue(value: T | null) {
    this.value.set(value);
    this.onChange(value);
  }

  protected markTouched() {
    this.touched.set(true);
    this.onTouched();
  }
}
