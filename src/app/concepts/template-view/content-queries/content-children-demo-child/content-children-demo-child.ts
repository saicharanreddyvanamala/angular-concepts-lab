import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-content-children-demo-child',
  imports: [],
  templateUrl: './content-children-demo-child.html',
  styleUrl: './content-children-demo-child.scss',
})
export class ContentChildrenDemoChild implements AfterContentInit {

  @ContentChildren('projectedItem') projectedItem!: QueryList<ElementRef<HTMLParagraphElement>>;

  ngAfterContentInit(): void {
    console.log('Projected items count', this.projectedItem.length);
  }

  highlightProjected() {
    this.projectedItem.forEach(p =>
      p.nativeElement.style.backgroundColor = 'Orange'
    )
  }
}
