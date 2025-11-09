import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from "../highlight.directive";
import { RouterLink } from "@angular/router";
import { BorderDirective } from "../border.directive";

@Component({
  selector: 'directives-demo',
  imports: [CommonModule, FormsModule, HighlightDirective, RouterLink, BorderDirective],
  templateUrl: './directives-demo.html',
  styleUrl: './directives-demo.scss',
})
export class DirectivesDemo {
  // Structural Directives *ngIf, *ngFor, *ngSwitch
  // *ngIf example
  isLoggedIn = true;

  // *ngFor example
  users = ['sai', 'raghu', 'ravi', 'saurabh']

  //*ngSwitch example
  role = 'admin';

  // Attribute Directives [ngClass], [ngStyle]
  // [ngClass] example
  isActive = true;
  theme = 'primary';

  // [ngStyle] example
  boxWidth = 100;

  //trackBy tells Angular how to keep DOM stable by identifying each item uniquely.
  trackUser(index: number, item: string){
    return item; // identity is item value
  }
}
