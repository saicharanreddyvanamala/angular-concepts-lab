import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-cd-onpush-child',
  imports: [],
  changeDetection:ChangeDetectionStrategy.OnPush,
  templateUrl: './cd-onpush-child.html',
  styleUrl: './cd-onpush-child.scss',
})
export class CdOnpushChild implements DoCheck {
  @Input() items!: string[];

  constructor( private cdr: ChangeDetectorRef) {}

  private previousLength = 0;

  ngDoCheck(): void {
    if(this.items.length !== this.previousLength){
      console.log('Item changed');
      this.previousLength = this.items.length;
      this.cdr.markForCheck();
      // or we can use this.cdr.detectChanges();
    }
  }
}

/**
 * Main Methods of ChangeDetectorRef

There are 4 important methods you should know:

markForCheck()

detectChanges()

detach()

reattach()


1️⃣ markForCheck()
What it does

Marks the component as dirty, so Angular will check it in the next change detection cycle.

When is this needed?

Mostly with OnPush components.

Why?

Because OnPush components are skipped unless Angular thinks they are dirty.

markForCheck guarantees the component will be checked in the next available CD pass — which can be the current one if CD is already running.


2️⃣ detectChanges()
What it does

Runs change detection immediately for:

This component

Its children

Think of it as:

“Check right now. Don’t wait.”

3️⃣ detach()
What it does

Completely removes this component from Angular’s change detection tree.

Angular will NEVER check it again automatically.

4️⃣ reattach()
What it does

Re-attaches the component back to Angular’s CD tree.
*/
