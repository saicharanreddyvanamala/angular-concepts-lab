import { Component, signal } from '@angular/core';
import { SignalIoDemoChild } from "../signal-io-demo-child/signal-io-demo-child";

@Component({
  selector: 'app-signal-io-demo-parent',
  imports: [SignalIoDemoChild],
  templateUrl: './signal-io-demo-parent.html',
  styleUrl: './signal-io-demo-parent.scss',
})
export class SignalIoDemoParent {
 // 🔒 State lives here
  count = signal(0);

  // 🧠 All logic lives here
  handleChange = (v: number) => {
    console.log('Child requested:', v);

    // Validation
    if (v < 0) {
      alert('No negative values');
      return;
    }

    if (v > 10) {
      alert('Max is 10');
      return;
    }

    // Accept change
    this.count.set(v);
  };
}
