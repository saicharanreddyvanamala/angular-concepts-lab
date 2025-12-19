import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdOnpushChild } from "../cd-onpush-child/cd-onpush-child";

@Component({
  selector: 'app-cd-onpush-parent',
  imports: [CdOnpushChild],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './cd-onpush-parent.html',
  styleUrl: './cd-onpush-parent.scss',
})
export class CdOnpushParent {
  items = ['A', 'B']


  addItem() {
    this.items.push('C');
  }
}

/**
 * CHANGE DETECTION NOTES
 * -------------------------------------------
 * Default CD:
 * - Checks entire component tree
 *
 * OnPush CD:
 * - Runs only on reference change
 * - Improves performance
 *
 * Triggers:
 * - Events, HTTP, Observables, timers
 *
 * ChangeDetectorRef:
 * - markForCheck(): mark component dirty
 * - detectChanges(): immediate check
 *
 * Golden rule:
 * - Immutable updates with OnPush
 *
 * Interview tip:
 * - OnPush + async pipe = best performance
 */
