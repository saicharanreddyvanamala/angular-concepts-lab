import { Component } from '@angular/core';
import { ContentChildrenDemoChild } from "../content-children-demo-child/content-children-demo-child";

@Component({
  selector: 'app-content-children-demo-parent',
  imports: [ContentChildrenDemoChild],
  templateUrl: './content-children-demo-parent.html',
  styleUrl: './content-children-demo-parent.scss',
})
export class ContentChildrenDemoParent {

}
