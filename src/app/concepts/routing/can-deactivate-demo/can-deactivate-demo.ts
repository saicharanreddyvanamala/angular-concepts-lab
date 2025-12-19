import { Component } from '@angular/core';
import { canComponentDeactivate } from '../can-deactivate.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-can-deactivate-demo',
  imports: [CommonModule],
  templateUrl: './can-deactivate-demo.html',
  styleUrl: './can-deactivate-demo.scss',
})
export class CanDeactivateDemo implements canComponentDeactivate {
  isDirty = false;
  onChange() {
    this.isDirty = true
  }

  canDeactivate(): boolean {
    if(!this.isDirty) {
      return true;
    }

    return confirm('You have usaved changes, Leave anyway?');
  }
}
