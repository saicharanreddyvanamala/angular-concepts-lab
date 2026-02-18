import { Component, Injector, Input, Optional, Self } from '@angular/core';
import { BaseCva } from '../base-form-controller';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-base-input',
  imports: [],
  templateUrl: './base-input.html',
  styleUrl: './base-input.scss',
})
export abstract class BaseInput<T> extends BaseCva<T> {
  @Input() label = '';
  @Input() id = '';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() readonly = false;
  @Input() autocomplete?: string;
  @Input() ariaLabel?: string;
  @Input() hint?: string;
  @Input() labelClass = 'col-sm-3';
  @Input() controlClass = 'col-sm-9';
  @Input() errorMessages: Record<string, string> = {};

  constructor(private injector: Injector) {
    super();
  }


  onBlur() {
    this.markTouched();
  }

 private _ngControl?: NgControl;

  protected get ngControl(): NgControl |undefined {
    if (!this._ngControl) {
      this._ngControl = this.injector.get(NgControl, undefined);
      if (this._ngControl) {
        this._ngControl.valueAccessor = this;
      }
    }
    return this._ngControl;
  }

  get control() {
    return this.ngControl?.control;
  }

  get showError(): boolean {
    return !!(
      this.control &&
      this.control.invalid &&
      (this.control.touched || this.control.dirty)
    );
  }

  get errors() {
    return this.control?.errors ?? {};
  }

  get errorKeys(): string[] {
    return Object.keys(this.errors);
  }
}
