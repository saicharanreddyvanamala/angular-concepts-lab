import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-template-demo-component',
  imports: [],
  templateUrl: './template-demo-component.html',
  styleUrl: './template-demo-component.scss',
})
export class TemplateDemoComponent {
  @ViewChild('tpl') tpl!: TemplateRef<any>;

  constructor(private vcr: ViewContainerRef) {}

  create(){
    this.vcr.createEmbeddedView(this.tpl);
  }

  clear() {
    this.vcr.clear();
  }
}
