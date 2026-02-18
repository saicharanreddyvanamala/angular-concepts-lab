import { Component, Input } from '@angular/core';
import { BaseInput } from '../base-input/base-input';
import { provideValueAccessor } from '../value-accessor.provider';

interface SelectOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-input-select',
  imports: [],
  templateUrl: './input-select.html',
  styleUrl: './input-select.scss',
    providers: [provideValueAccessor(InputSelect)]

})
export class InputSelect extends BaseInput<any> {
  @Input() options: SelectOption[] = [];
  @Input() multiple = false;

    onChangeSelect(e: Event) {
      const val = (e.target as HTMLSelectElement).value;
      this.setValue(val);
    }
}
