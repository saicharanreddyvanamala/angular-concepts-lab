import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-outlet-context-demo',
  imports: [CommonModule],
  templateUrl: './template-outlet-context-demo.html',
  styleUrl: './template-outlet-context-demo.scss',
})
export class TemplateOutletContextDemo {
 user = { name: 'Sai' };
 // NOTES:
// -------- TemplateOutlet Context Concept --------
//
// ngTemplateOutlet can inject template AND also a context object.
// The context object is how we pass data INTO the template.
//
// context: { $implicit: value } --> this is default variable inside template
// in template we receive using let-x  (let-x = $implicit)
//
// We can pass multiple values also
// context: { $implicit: user, index: 5 }
//
// In template:
//   let-u             → gets $implicit (user object)
//   let-i="index"     → gets index value
//
// IMPORTANT: ngTemplateOutlet does NOT create new component instance.
// It reuses same template reference but creates EmbeddedView dynamically
// with provided context.
//
// Summary rule to remember:
// --> $implicit is the main unnamed variable passed to template
// --> other named values are accessed by let-name="contextKey"
//
// This pattern is extremely useful for:
// - dynamic list cell template
// - dynamic tabs
// - dynamic UI plug-in kind architecture
// - smart reusable dumb UI isolation

}
