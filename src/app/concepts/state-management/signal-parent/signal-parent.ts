import { Component, signal } from '@angular/core';
import { SignalChild } from "../signal-child/signal-child";

@Component({
  selector: 'app-signal-parent',
  imports: [SignalChild],
  templateUrl: './signal-parent.html',
  styleUrl: './signal-parent.scss',
})
export class SignalParent {

  // This is Shared State
  count = signal(0); // will be used with model()

  title = signal('Hello From Parent'); // will be used with input()


  incrementInParent() {
    this.count.update(v => v + 1);
  }

  changeTitleInParent(){
    this.title.set('Title Changed at ' + new Date().toLocaleTimeString());
  }
}

/**
 * =========================
 * 🔹 Parent owns the STATE
 * =========================
 *
 * In signal-based Angular:
 * - Parent should create signals using signal()
 * - Parent passes:
 *   - VALUES to input()
 *   - SIGNALS to model()
 *
 * Rules:
 * - input()  → pass value:   title()
 * - model()  → pass signal:  count
 *
 * This enforces:
 * - Clear state ownership
 * - Predictable data flow
 * - No accidental mutation of inputs
 */
