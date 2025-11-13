import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-context-demo',
  imports: [CommonModule],
  templateUrl: './template-context-demo.html',
  styleUrl: './template-context-demo.scss',
})
export class TemplateContextDemo {

  users = [
    {name: 'sai'},
    {name: 'john'},
    {name: 'Neha'}
  ]

  /**
   * TemplateRef (#userTemplate) is the blueprint.
      ngFor iterates users and for each user, ngTemplateOutlet creates
      one template instance and injects a context object. let- variables are mapped to that context object values.

-> AST how Angular sees this logically

    Angular understands it like a tree:
          ComponentView
    └─ TemplateRef (ngFor)
          context binding: ngForOf -> users
          variables: $implicit -> u, index -> idx
          creates multiple EmbeddedViews:
            EmbeddedView #1: context { $implicit: users[0], index: 0 }
            EmbeddedView #2: context { $implicit: users[1], index: 1 }
            EmbeddedView #3: context { $implicit: users[2], index: 2 }
                inside each view: another TemplateRef (userTemplate)

  */
}
