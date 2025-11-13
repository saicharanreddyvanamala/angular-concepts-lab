import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dynamic-tabs-demo',
  imports: [CommonModule],
  templateUrl: './dynamic-tabs-demo.html',
  styleUrl: './dynamic-tabs-demo.scss',
})
export class DynamicTabsDemo {

  @ViewChild('homeTemplate') homeTemplate!: TemplateRef<any>;
  @ViewChild('profileTemplate') profileTemplate!: TemplateRef<any>;
  @ViewChild('settingsTemplate') settingsTemplate!: TemplateRef<any>;

  selectedTabIndex = 0;
  tabs!: any[];

ngAfterViewInit(): void {
  Promise.resolve().then(() => {
    this.tabs = [
      { title: "Home", template: this.homeTemplate, data: { message: "Welcome to Home tab!" } },
      { title: "Settings", template: this.settingsTemplate, data: { mode: "Dark Mode" } },
    ];
  });
}


}
