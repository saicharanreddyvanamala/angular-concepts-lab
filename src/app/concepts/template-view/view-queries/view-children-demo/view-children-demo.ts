import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-view-children-demo',
  imports: [CommonModule],
  templateUrl: './view-children-demo.html',
  styleUrl: './view-children-demo.scss',
})
export class ViewChildrenDemo implements AfterViewInit {

  @ViewChildren('colorPara') colorParas!: QueryList<ElementRef<HTMLParagraphElement>>

  colors = ['Red', 'Green', 'Orange']

  ngAfterViewInit(): void {
    console.log('All color paragraphs', this.colorParas);
  }

  highlightAll() {
    this.colorParas.forEach(p => {
      p.nativeElement.style.backgroundColor = 'yellow'
    });
  }

  /*
 🧠 VIEWCHILDREN & CONTENTCHILDREN — ADVANCED VIEW QUERIES
 ---------------------------------------------------------

 👉 Purpose:
 Used to query and access MULTIPLE elements, directives, or components.
 Similar to @ViewChild/@ContentChild but returns a QueryList<T> instead of a single instance.

 🎯 What they do:
   - @ViewChildren(selector)
        → Collects all matching elements/components declared
          inside this component’s OWN template (View DOM).

   - @ContentChildren(selector)
        → Collects all matching elements/components projected
          from the PARENT template into <ng-content> (Content DOM).

 ⚙️ Lifecycle Hooks:
   - @ViewChildren → available in ngAfterViewInit()
   - @ContentChildren → available in ngAfterContentInit()

 🔍 Returned Type:
   - Both return a QueryList<T>
     - Behaves like an array but is observable (updates when DOM changes)
     - Common methods: .forEach(), .toArray(), .changes.subscribe()

 🧩 Typical Use Cases:
   - Iterate over multiple DOM elements or components
   - Dynamically apply styles or call methods on a set of child components
   - Detect changes in projected content or lists

 📘 Example Summary:
   @ViewChildren('item') itemRefs!: QueryList<ElementRef>;
     → Access all template elements marked with #item inside this component.

   @ContentChildren('child') childrenRefs!: QueryList<ElementRef>;
     → Access all elements passed from parent into <ng-content>.

 ⚖️ Difference Recap:
   - @ViewChildren → operates on component’s OWN template (View DOM)
   - @ContentChildren → operates on PROJECTED content (Content DOM)
*/

}
