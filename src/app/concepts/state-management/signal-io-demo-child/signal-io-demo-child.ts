import { Component, input } from '@angular/core';

@Component({
  selector: 'app-signal-io-demo-child',
  imports: [],
  templateUrl: './signal-io-demo-child.html',
  styleUrl: './signal-io-demo-child.scss',
})
export class SignalIoDemoChild {
  // 🔽 Value comes from parent
  count = input.required<number>();

  // 🔼 Callback comes from parent
  onChange = input<(v: number) => void>();

  inc() {
    const newValue = this.count() + 1;
    this.onChange()?.(newValue);
  }

  dec() {
    const newValue = this.count() - 1;
    this.onChange()?.(newValue);
  }
}
