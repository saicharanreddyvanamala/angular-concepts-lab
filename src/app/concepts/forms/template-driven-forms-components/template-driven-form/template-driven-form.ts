import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ControlValueAccessor } from '../control-value-accessor/control-value-accessor';

@Component({
  selector: 'app-template-driven-form',
  imports: [ControlValueAccessor,CommonModule, FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss',
})
export class TemplateDrivenForm {
  countValue = 0;

  onSubmit(form: NgForm) {
    console.log('Form Data:', form.value);
  }

  /*
  TEMPLATE-DRIVEN FORM GROUPS (ngModelGroup)

  ✔ ngModelGroup creates a nested FormGroup inside a template-driven form.
  ✔ Helps organize form sections (user, address, credentials).
  ✔ Each group maintains its own:
      • value
      • valid/invalid state
      • touched/dirty state
  ✔ Form structure becomes hierarchical:
        myForm.value = {
          user: { name: '', email: '' },
          address: { city: '', country: '' }
        }
  ✔ Useful for:
      • grouping related controls
      • group-level validation
      • accessing groups programmatically
  ✔ Works similar to FormGroup in Reactive Forms, but defined in the template.
*/

}
