import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-content-child-demo-child',
  imports: [],
  templateUrl: './content-child-demo-child.html',
  styleUrl: './content-child-demo-child.scss',
})
export class ContentChildDemoChild implements AfterContentInit {

  @ContentChild('projectedPara') projectedElement!: ElementRef<HTMLParagraphElement>

  ngAfterContentInit(): void {
    console.log('Projected element:', this.projectedElement.nativeElement.textContent);
  }
}
