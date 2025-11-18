import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'pureUppercase'
  // pure: true <-- default (you can omit this)
})
export class PureUppercasePipe implements PipeTransform {
  transform(value: string | string[]) {
    console.log(`PURE PIPE executed and value is: ${value}`);
      // CASE 1: value is a single string
    if (typeof value === 'string') {
      return value.toUpperCase();
    }

    // CASE 2: value is an array of strings
    if (Array.isArray(value)) {
      return value.map(item => item.toUpperCase());
    }
    return value;
  }

  /*
  --------------------------------------------------------------------
  🧠 PURE vs IMPURE PIPES — IMPORTANT NOTES
  --------------------------------------------------------------------

  ✔ PURE PIPE  (default: pure: true)
  ------------------------------------------------
  - Angular executes a pure pipe ONLY when the input REFERENCE changes.
  - Pure pipes are fast and cached.
  - They DO NOT run when:
        • Arrays/Objects are mutated (push/pop/splice/change property)
        • Same reference value is passed again
  - They DO run when:
        • A new array/object/string/number reference is created
        • Input primitive changes (string/number/boolean)
  - Best used for:
        • Data formatting (date, number, currency)
        • Transformations that produce deterministic outputs
        • Large lists where performance matters

  Example:
      this.users.push('x');        // ❌ pure pipe will NOT run
      this.users = [...this.users, 'x'];
                                  // ✔ pure pipe WILL run (new reference)


  ✔ IMPURE PIPE  (pure: false)
  ------------------------------------------------
  - Executed on EVERY Angular change detection cycle.
  - Runs even when input did NOT change.
  - Runs for ANY event in the app:
        • Click
        • Keyup
        • Timers (setTimeout, setInterval)
        • HTTP responses
        • Change in parent component
  - Expensive ⚠️ — use sparingly.
  - Best used only when:
        • Input is mutated frequently and must update live
        • The transformation relies on non-pure, constantly changing data
        • You intentionally want recalculation every cycle


  🔍 CHANGE DETECTION BEHAVIOR
  ------------------------------------------------
      PURE PIPE:
          - Runs only if (previousValue !== currentValue)
          - Compares input using reference equality

      IMPURE PIPE:
          - Always runs, no reference check


  ⚡ WHY IMPURE PIPE RUNS MULTIPLE TIMES ON LOAD?
  ------------------------------------------------
      Angular performs multiple change detection cycles during:
          - Initial render
          - ngOnInit
          - ngAfterContentInit
          - ngAfterViewInit
          - Stabilization
      → Impure pipe re-executes in all cycles.


  ✔ RULE OF THUMB
  ------------------------------------------------
      Use PURE pipes 99% of the time.
      Use IMPURE pipes ONLY when you understand the performance cost.

  --------------------------------------------------------------------
*/

}
