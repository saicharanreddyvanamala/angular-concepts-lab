import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-with-cva',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-with-cva.html',
  styleUrl: './input-with-cva.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputWithCva),
      multi: true
    }
  ]
})
export class InputWithCva extends BaseControlValueAccessor<string> {
  @Input() label = '';

  // value = '';
  // disabled = false;

  // onChange = (v: any) => {};
  // onTouched = () => {};

  // writeValue(value: any): void {
  //   this.value = value || '';
  // }

  // registerOnChange(fn: any): void {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: any): void {
  //   this.onTouched = fn;
  // }

  // setDisabledState(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }

  onInput(event: Event) {
    const v = (event.target as HTMLInputElement).value;
    this.value = v;
    this.onChange(v);
  }
}
