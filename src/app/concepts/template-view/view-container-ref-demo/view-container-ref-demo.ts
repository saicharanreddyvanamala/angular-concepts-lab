import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-view-container-ref-demo',
  imports: [CommonModule],
  templateUrl: './view-container-ref-demo.html',
  styleUrl: './view-container-ref-demo.scss',
})
export class ViewContainerRefDemo {
  @ViewChild('messageTemplate', { read: TemplateRef }) messageTemplate!: TemplateRef<any>;

  constructor(public viewContainer: ViewContainerRef) {}

  addView() {
    const index = this.viewContainer.length;
    this.viewContainer.createEmbeddedView(this.messageTemplate, { index });
  }

  removeLast() {
    const lastIndex = this.viewContainer.length - 1;
    if (lastIndex >= 0) this.viewContainer.remove(lastIndex);
  }

  clearAll() {
    this.viewContainer.clear();
  }

  // NOTES:
/*
 🧠 MULTIPLE EMBEDDED VIEWS (ADVANCED DYNAMIC RENDERING)
 --------------------------------------------------------
 👉 ViewContainerRef can hold multiple EmbeddedViewRefs at once.

 ⚙️ Key Operations:
   - createEmbeddedView(templateRef, context?) → adds new view
   - insert(viewRef, index?) → insert existing view at position
   - remove(index?) → remove specific view
   - clear() → remove all
   - length → number of current embedded views

 💡 Each call to createEmbeddedView() = new view instance in memory.

 📘 Use Cases:
   - Dynamic lists or UI panels
   - Multi-view dashboards
   - Dynamic forms and repeatable sections
*/

}
