import { Component } from '@angular/core';
import { ContentChildDemoChild } from "../content-child-demo-child/content-child-demo-child";

@Component({
  selector: 'app-content-child-demo-parent',
  imports: [ContentChildDemoChild],
  templateUrl: './content-child-demo-parent.html',
  styleUrl: './content-child-demo-parent.scss',
})
export class ContentChildDemoParent {

}
