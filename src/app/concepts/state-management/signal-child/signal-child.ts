import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-signal-child',
  imports: [],
  templateUrl: './signal-child.html',
  styleUrl: './signal-child.scss',
})
export class SignalChild {
  // ✅ One-way signal input (parent -> child)
  title = input<string>();

  // ✅ Two-way signal model (parent <-> child)
  count = model<number>(0);

   incrementInChild() {
    // This updates the PARENT automatically
    this.count.update(v => v + 1);
  }
}
/**
 * RULES:
 * - input()  = read-only, pass VALUE from parent
 * - model()  = read/write, pass SIGNAL from parent
 * - Parent owns state
 * - Child reacts to state
 */

/**
 * =========================
 * 🔹 input() — One-way Signal Input
 * =========================
 *
 * This replaces the old @Input().
 *
 * What it means:
 * - The PARENT owns the state.
 * - The CHILD receives a READ-ONLY signal view of that state.
 * - The child MUST NOT modify this value.
 *
 * How data flows:
 *   Parent (signal) ───▶ Child (input signal)
 *
 * How to bind from parent:
 *   <child [title]="title()"></child>
 *
 * Why we pass title():
 * - Because input() expects a VALUE, not a Signal.
 * - Angular wraps this value into a signal automatically inside the child.
 *
 * How to read it in child:
 *   this.title()   // or in template: {{ title() }}
 *
 * ❌ Do NOT do:
 *   this.title.set(...)
 *   this.title.update(...)
 *
 * Use input() for:
 * - Configuration
 * - Display-only values
 * - Labels, flags, options, readonly data
 *
 * This gives:
 * - Clear one-way data flow
 * - Predictable state ownership
 * - No ngOnChanges needed
 */

/**
 * =========================
 * 🔹 model() — Two-way Signal Binding
 * =========================
 *
 * This replaces:
 *   @Input() value
 *   @Output() valueChange
 *   EventEmitter
 *
 * What it means:
 * - The PARENT and CHILD share the SAME reactive state.
 * - The child IS ALLOWED to update this value.
 *
 * How data flows:
 *   Parent (signal) ⇄ Child (model signal)
 *
 * How to bind from parent:
 *   <child [(count)]="count"></child>
 *
 * Important:
 * - Parent must pass a SIGNAL.
 * - Child receives a WRITABLE signal.
 *
 * How to read:
 *   this.count()
 *
 * How to write:
 *   this.count.set(...)
 *   this.count.update(...)
 *
 * Why we give a default value:
 *   model<number>(0)
 * - Because the parent might forget to bind it.
 * - Prevents "possibly undefined" TypeScript errors.
 *
 * Use model() for:
 * - Input components
 * - Sliders, counters, toggles
 * - Form controls
 * - Any "controlled component"
 *
 * This gives:
 * - No EventEmitter
 * - No @Output
 * - No manual wiring
 * - No OnPush needed
 * - Automatic UI updates
 */
