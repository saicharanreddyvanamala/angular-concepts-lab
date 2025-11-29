import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rf-with-onpush',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rf-with-onpush.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './rf-with-onpush.scss',
})
export class RfWithOnpush {
form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
      email: [''],
      phone: [''],
    });
  }

  /**
 * LEVEL 14 – Performance & Change Detection with Reactive Forms
 * =============================================================
 *
 * 1) Change Detection Basics:
 *    - Angular runs change detection on events, async tasks, and form updates.
 *    - Reactive Forms trigger change detection when control values change.
 *
 * 2) ChangeDetectionStrategy.OnPush:
 *    - Component checked only when:
 *        • @Input reference changes
 *        • an event occurs in the component
 *        • an observable used with async pipe emits
 *        • markForCheck() is called
 *    - Works WELL with Reactive Forms:
 *        • formControlName / formGroup directives trigger updates.
 *
 * 3) Avoid heavy work in templates:
 *    - Don’t call heavyCalculation() directly in {{ }} or *ngFor.
 *    - Precompute using valueChanges or store results in component fields.
 *
 * 4) Use valueChanges wisely:
 *    - Combine with RxJS operators to avoid too many actions:
 *
 *      this.form.get('search')?.valueChanges.pipe(
 *        debounceTime(400),
 *        distinctUntilChanged()
 *      ).subscribe(value => { ... });
 *
 * 5) FormArray + *ngFor:
 *    - Always use trackBy to avoid unnecessary DOM recreations:
 *
 *      <div *ngFor="let ctrl of skills.controls; let i=index; trackBy: trackByIndex">
 *        ...
 *      </div>
 *
 *      trackByIndex(i: number) { return i; }
 *
 * 6) Avoid creating new objects/arrays in template:
 *    - Move literals like ['A','B','C'] or {a:1} to component properties.
 *
 * 7) async pipe + OnPush:
 *    - Prefer using async pipe with observables (e.g. summary$) so that
 *      change detection triggers only when new values are emitted.
 *
 * 8) markForCheck():
 *    - Only needed when you update state from outside Angular's normal
 *      mechanisms (e.g. custom CVA + external library callbacks).
 */

}
