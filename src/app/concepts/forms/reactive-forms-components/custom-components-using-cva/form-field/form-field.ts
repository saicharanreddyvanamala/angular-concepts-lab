import { CommonModule } from '@angular/common';
import { Component, Input, Optional, Self, computed } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  imports: [CommonModule],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})

export class FormField {

  @Input() label = '';
  @Input() errorMessages: Record<string, string> = {};
  @Input() showErrors = true;
   @Input() labelCol = 'col-sm-3';
  @Input() controlCol = 'col-sm-9';

  constructor(@Optional() @Self() public ngControl: NgControl) {}

  errors = computed(() => {
    if (!this.ngControl || !this.ngControl.touched || !this.ngControl.errors) {
      return [];
    }

    return Object.keys(this.ngControl.errors).map(
      key => this.errorMessages[key] || 'Invalid field'
    );
  });
}
