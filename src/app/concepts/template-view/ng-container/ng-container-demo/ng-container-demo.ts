import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-container-demo',
  imports: [CommonModule],
  templateUrl: './ng-container-demo.html',
  styleUrl: './ng-container-demo.scss',
})
export class NgContainerDemo {
  isLoggedIn = true;

  toggle() {
    this.isLoggedIn = !this.isLoggedIn
  }

  /**
   * Why ng-container exists?

    Because div adds extra DOM node.
    ng-container does not add any real DOM element.

    ng-container is a logical grouping element only for Angular purpose

    It never appears in DOM.


    => ng-template and how it is different from ng-container?

    --->ng-container

        <ng-container> = DOES NOT create DOM element
        But Angular still renders its content immediately in DOM.

        It is used for grouping structural directives without adding extra html element.

        Example:

        <ng-container>
          <p>Welcome!</p>
        </ng-container>


        DOM output is:

        <p>Welcome!</p>

        So ng-container = renders now (but without element)
        ng-template

        <ng-template> = Angular does NOT render this block by default.

        It is a blueprint / template stored in memory.

        It only renders when structural directive uses it like ngIf, ngFor OR when you manually reference it.

        Example:

        <ng-template>
          <p>Hello</p>
        </ng-template>


        This will NOT appear in DOM until used.


  */
}
