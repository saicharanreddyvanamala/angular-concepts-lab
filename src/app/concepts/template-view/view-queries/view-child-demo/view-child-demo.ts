import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  imports: [],
  templateUrl: './view-child-demo.html',
  styleUrl: './view-child-demo.scss',
})
export class ViewChildDemo implements AfterViewInit {

  @ViewChild('usernameInput') inputRef!: ElementRef<HTMLInputElement>;

  ngAfterViewInit() {
    console.log('viewChild reference:', this.inputRef.nativeElement);
  }

  focusInput() {
    // use nativeElement to interact with DOM element safely
    this.inputRef.nativeElement.focus();
  }

  /**
 * 🧠 Angular View Queries Deep Notes
 *
 * 📘 1️⃣ View Queries Overview
 * -------------------------------------------------------
 * Angular allows accessing elements, directives, or components
 * from its template or projected content using query decorators:
 *   - @ViewChild() / @ViewChildren()
 *   - @ContentChild() / @ContentChildren()
 *
 * These queries give access to Angular's view tree — NOT the raw DOM directly —
 * and are resolved after Angular creates and renders the views.
 *
 * -------------------------------------------------------
 * 🔹 @ViewChild(selector)
 * -------------------------------------------------------
 * - Scans the component's own template (view DOM)
 * - Used to access:
 *     • native DOM elements (via ElementRef)
 *     • child components
 *     • structural directive instances
 * - Available after `ngAfterViewInit()`
 *
 * Example:
 *   @ViewChild('usernameInput') inputRef!: ElementRef<HTMLInputElement>;
 *
 * -------------------------------------------------------
 * 🔹 @ContentChild(selector)
 * -------------------------------------------------------
 * - Scans content projected via <ng-content>
 *   (elements that come from the parent template)
 * - Available after `ngAfterContentInit()`
 * - Useful for reusable, projection-based components
 *
 * Example:
 *   @ContentChild('projectedPara') projectedElement!: ElementRef;
 *
 * -------------------------------------------------------
 * 🧩 View DOM vs Content DOM
 * -------------------------------------------------------
 * - View DOM: template directly owned by the component.
 * - Content DOM: template passed *into* component from its parent.
 *
 *
 * -------------------------------------------------------
 * ⚙️ Lifecycle Hooks
 * -------------------------------------------------------
 * - View Queries → `ngAfterViewInit()`
 * - Content Queries → `ngAfterContentInit()`
 *
 *
 * -------------------------------------------------------
 * 🧾 Summary Table
 * -------------------------------------------------------
 * | Query Decorator | Scans              | Lifecycle Hook         |
 * |------------------|-------------------|-------------------------|
 * | @ViewChild       | View Template     | ngAfterViewInit()       |
 * | @ViewChildren    | View Template     | ngAfterViewInit()       |
 * | @ContentChild    | Projected Content | ngAfterContentInit()    |
 * | @ContentChildren | Projected Content | ngAfterContentInit()    |
 *
 *
 * -------------------------------------------------------
 * 💡 Why Queries Exist
 * -------------------------------------------------------
 * - Angular does NOT expose direct DOM APIs to preserve
 *   platform independence (browser, server, native).
 * - These query decorators provide a controlled way
 *   to access view elements safely.
 */

}
